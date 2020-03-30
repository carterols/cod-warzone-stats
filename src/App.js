import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import { Container, Grid, IconButton, Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import userService from './service/userService';
import StatCard from './components/StatCard';
import { withCookies } from 'react-cookie';
import './App.css';

function getMax(value1, idx1, value2, idx2) {
  if (value1 > value2) return idx1
  else return idx2;
}

function getStatColors(idx, users) {
  let colors = {};
  let maxStats = {};

  if (users.length < 2) {
    Object.keys(users[idx].data).forEach(key => {
      colors[key] = 'none';
    });

    return colors;
  }

  for (let i = 0; i < users.length; i++) {
    if (i !== idx) {
      Object.keys(users[idx].data).forEach(key => {
        const maxIdx = getMax(users[idx].data[key], idx, users[i].data[key], i);
        if (maxStats.hasOwnProperty(key) && users[maxIdx].data[key] > users[maxStats[key]].data[key]) {
          maxStats[key] = maxIdx;
        } else if (!maxStats.hasOwnProperty(key)) {
          maxStats[key] = maxIdx;
        }
      })
    }
  }

  Object.keys(maxStats).forEach(stat => {
    if (maxStats[stat] !== idx) {
      colors[stat] = 'error';
    } else {
      colors[stat] = 'primary';
    }
  });

  return colors;
}

function App(props) {
  const [users, setUsers] = useState([]);
  const [searchError, setSearchError] = useState(false);

  const searchUser = async (user, platform) => {
    let player = {
      isLoading: true
    };
    const results = await userService.getUser(user, platform);
    if (results) {
      player['data'] = results.data.lifetime.mode.br.properties;
      player['data']['userName'] = results.data.username;
      player.isLoading = false;
      let players = [...users, player];
      players = players.map((p, idx) => {
        return {
          ...p,
          colors: getStatColors(idx, players)
        }
      })
      setUsers(players);
      return true;
    } else {
      player.isLoading = false;
      setSearchError(true);
      return false;
    }
  }

  const handleUserClose = (idx) => {
    setUsers(oldUsers => oldUsers.filter((_, index) => index !== idx));
  }

  const renderSearchResults = () => {
    return (
      users.map((user, idx) => {
        return (
          <Grid item key={idx} xs={6}>
            <StatCard data={user.data} colors={user.colors} index={idx} removeCard={handleUserClose} loading={user.isLoading} />
          </Grid>
        )
      })
    );
  }

  const handleAlertClose = () => {
    setSearchError(false);
  }

  return (
    <div>
      <Navbar />
      <Container maxWidth="md">
        <Search search={searchUser} cookies={props.cookies} />
        <Grid container spacing={3} className="stats-container">
          {users.length > 0 ? renderSearchResults() : null}
        </Grid>
      </Container>

      <Snackbar open={searchError} autoHideDuration={3000} onClose={handleAlertClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={handleAlertClose} severity="error">
          The username you entered was invalid.
          </Alert>
      </Snackbar>
    </div>
  );
}

export default withCookies(App);
