import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import {
  Container,
  Grid,
  LinearProgress,
  Snackbar,
  Paper,
  Chip,
  makeStyles,
  Button,
  Tabs,
  Tab
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import userService from "./service/userService";
import StatCard from "./components/StatCard";
import { withCookies } from "react-cookie";
import Leaderboards from "./components/Leaderboards";
import MatchCard from "./components/MatchCard";
import "./App.css";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "start",
    flexWrap: "wrap",
    padding: theme.spacing(0.5),
    marginBottom: "2rem"
  },
  chip: {
    margin: theme.spacing(0.5)
  },
  marginTop: {
    marginTop: theme.spacing(1)
  }
}));

function getMaxStats(users) {
  const userKeys = Object.keys(users);
  let maxStats = {};

  if (userKeys.length < 2) {
    return null;
  }

  userKeys.forEach(user => {
    Object.keys(users[user].data).forEach(key => {
      if (
        maxStats.hasOwnProperty(key) &&
        users[user].data[key] > users[maxStats[key]].data[key]
      ) {
        maxStats[key] = user;
      } else if (!maxStats.hasOwnProperty(key)) {
        maxStats[key] = user;
      }
    });
  });

  return maxStats;
}

function getStatColors(user, maxStats) {
  let colors = {};
  // if there is 1 or less users
  if (!maxStats) {
    Object.keys(user.data).forEach(key => {
      colors[key] = "none";
    });

    return colors;
  }

  Object.keys(maxStats).forEach(stat => {
    if (maxStats[stat] !== user.data.userName) {
      colors[stat] = "error";
    } else {
      colors[stat] = "primary";
    }
  });

  return colors;
}

function getTeamStats(teams, teamName) {
  const pos = teams.map(team => team.name).indexOf(teamName);
  return teams[pos];
}

function App(props) {
  const classes = useStyles();
  const [visibleUsers, setVisibleUsers] = useState({});
  const [searchError, setSearchError] = useState(false);
  const [loadingResults, setLoadingResults] = useState(false);
  const [allUsers, setAllUsers] = useState({});
  const [recentMatches, setRecentMatches] = useState([]);
  const [tabSelected, setTabSelected] = useState(0);

  useEffect(() => {
    const lastSearchedUser = props.cookies.get('lastSearchedUser');

    if (lastSearchedUser) {
      searchUser(lastSearchedUser.userName, lastSearchedUser.platform);
    }
  }, [])


  const searchUser = async (user, platform) => {
    if (visibleUsers.hasOwnProperty(user)) {
      return false;
    }

    setLoadingResults(true);
    const results = await userService.getUser(user, platform);

    if (results) {
      let player = {};
      let newAllUsers = {};

      player.data = results.data.lifetime.mode.br.properties;
      player.data.kdRatio = parseFloat(player.data.kdRatio.toFixed(2));
      player.data.avgKills = parseInt(
        Math.round(player.data.kills / player.data.gamesPlayed)
      );
      player.data.avgScore = parseInt(
        Math.round(player.data.score / player.data.gamesPlayed)
      );
      player.data.userName = results.data.username;
      player.data.platform = platform;
      
      let newVisibleUsers = {};

      newVisibleUsers[player.data.userName] = player;
      newAllUsers[player.data.userName] = player;

      let matches = await userService.getRecentMatches(user, platform);
      matches = matches.matches.map(match => ({
        utcStartSeconds: match.utcStartSeconds,
        playerCount: match.playerCount,
        player: match.player,
        playerStats: match.playerStats,
        teamCount: match.teamCount,
        teamStats: getTeamStats(match.rankedTeams, match.player.team)
      }));
      setRecentMatches(matches);

      let friendsResults = await userService.getFriendsStats(user, platform);
      if (friendsResults && friendsResults.status === "success") {
        friendsResults = friendsResults.data;
        friendsResults = friendsResults.forEach(friend => {
          if (friend.platform === "uno") {
            friend.platform = "battle";
          }
          let data = friend.lifetime.mode.br.properties;
          data.kdRatio = parseFloat(data.kdRatio.toFixed(2));
          newAllUsers[friend.username] = {
            data: {
              ...data,
              userName: friend.username,
              avgKills: parseInt(Math.round(data.kills / data.gamesPlayed)),
              avgScore: parseInt(Math.round(data.score / data.gamesPlayed)),
              platform: friend.platform
            }
          };
        });
      }

      const maxStats = getMaxStats(visibleUsers);

      Object.keys(newVisibleUsers).forEach(p => {
        newVisibleUsers[p].colors = getStatColors(newVisibleUsers[p], maxStats);
      });

      setLoadingResults(false);
      setVisibleUsers(newVisibleUsers);
      setAllUsers(newAllUsers);
      return true;
    } else {
      setSearchError(true);
      return false;
    }
  };

  const handleUserClose = userName => {
    let newVisibleUsers = {
      ...visibleUsers
    };

    delete newVisibleUsers[userName];
    setVisibleUsers(newVisibleUsers);
  };

  const renderSearchResults = index => {
    if (Object.keys(visibleUsers).length > 0) {
      return Object.keys(visibleUsers).map(user => {
        return (
          <Grid item hidden={index !== tabSelected} key={user} sm={6}>
            <StatCard
              data={visibleUsers[user].data}
              colors={visibleUsers[user].colors}
              removeCard={handleUserClose}
            />
          </Grid>
        );
      });
    }
    return null;
  };

  const renderTags = index => {
    if (Object.keys(visibleUsers).length > 0) {
      return (
        <Paper hidden={index !== tabSelected} className={classes.root}>
          
          {Object.keys(visibleUsers).map(user => {
            return (
              <Chip
                key={user}
                label={user}
                onDelete={_ => handleUserClose(user)}
                className={classes.chip}
              />
            );
          })}
        </Paper>
      );
    }
    return null;
  };

  const renderProgressBar = () => {
    if (loadingResults) {
      return (
        <Grid item sm={12}>
          <LinearProgress color="primary" />
        </Grid>
      );
    } else {
      return null;
    }
  };

  function getRows() {
    return Object.keys(allUsers).map(user => allUsers[user].data);
  }

  const changeSelected = selectedUsers => {
    const maxStats = getMaxStats(selectedUsers);
    Object.keys(selectedUsers).forEach(user => {
      selectedUsers[user].colors = getStatColors(selectedUsers[user], maxStats);
    });
    setVisibleUsers(selectedUsers);
  };

  const renderLeaderboards = index => {
    if (Object.keys(allUsers).length > 1) {
      return (
        <Grid item hidden={index !== tabSelected} sm={12}>
          <Leaderboards
            data={getRows()}
            selected={visibleUsers}
            changeSelected={changeSelected}
          />
        </Grid>
      );
    } else {
      return null;
    }
  };

  const handleAlertClose = () => {
    setSearchError(false);
  };

  const handleTabChange = (e, newValue) => {
    setTabSelected(newValue);
  };

  const renderRecentMatches = index => {
    if (recentMatches.length > 0) {
      return (
        <Grid container spacing={3} className="stats-container">
          {recentMatches.map((match, idx) => {
            return (
              <Grid item hidden={index !== tabSelected} key={idx} sm={12}>
                <MatchCard data={match} />
              </Grid>
            );
          })}
        </Grid>
      );
    }
  };

  const renderMainStats = index => {
    return (
      <Grid container spacing={3} className="stats-container">
        
        {renderSearchResults(index)} {renderLeaderboards(index)}
      </Grid>
    );
  };

  const renderTabs = () => {
    if (Object.keys(visibleUsers).length > 0) {
      return (
        <Paper className={classes.marginTop}>
          <Tabs
            value={tabSelected}
            onChange={handleTabChange}
            variant='fullWidth'
            indicatorColor="primary"
            centered
          >
            <Tab label="Overview" />
            <Tab label="Recent Matches" />
          </Tabs>
        </Paper>
      );
    }
    return null;
  };

  return (
    <div>
      <Navbar />
      <Container maxWidth="lg">
        
        {renderTags(0)} <Search search={searchUser} cookies={props.cookies} />
        {renderProgressBar()} {renderTabs()} {renderMainStats(0)}
        {renderRecentMatches(1)}
      </Container>
      <Snackbar
        open={searchError}
        autoHideDuration={3000}
        onClose={handleAlertClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        <Alert onClose={handleAlertClose} severity="error">
          The username you entered was invalid.
        </Alert>
      </Snackbar>
    </div>
  );
}

export default withCookies(App);
