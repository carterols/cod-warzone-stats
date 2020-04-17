import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Card, CardContent, makeStyles, Divider, Grid, Box, IconButton } from '@material-ui/core';
import '../App.css';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
  },
  closeButton: {
    marginLeft: 'auto'
  }
}));

function displayTimePlayed(seconds) {
  const days = Math.floor(seconds / 86400).toLocaleString();
  let leftOverSeconds = seconds % 86400;

  const hours = Math.floor(leftOverSeconds / 3600).toLocaleString();
  leftOverSeconds = leftOverSeconds % 3600;

  const minutes = Math.floor(leftOverSeconds / 60).toLocaleString();
  leftOverSeconds = leftOverSeconds % 60;

  return `${days} days, ${hours} hours, ${minutes} minutes, ${leftOverSeconds} seconds`;
}

export default function UserCard(props) {
  const classes = useStyles();
  const {
    userName,
    wins,
    kills,
    kdRatio,
    downs,
    topTwentyFive,
    topTen,
    contracts,
    revives,
    topFive,
    score,
    timePlayed,
    gamesPlayed,
    scorePerMinute,
    cash,
    deaths
  } = props.data;

  const colors = props.colors;

  const renderArrowIcon = (stat) => {
    if (colors[stat] === 'none') {
      return null;
    } else if (colors[stat] === 'error') {
      return (
        <ArrowDownwardIcon color='error' fontSize='inherit' />
      );
    } else if (colors[stat] === 'primary') {
      return (
        <ArrowUpwardIcon color='primary' fontSize='inherit' />
      );
    }
  }
 
  const closeCard = (e) => {
    props.removeCard(userName);
  }

  return (
    <Card>
      <IconButton onClick={closeCard}>
        <CloseIcon />
      </IconButton>
      <CardContent align='center'>
        <Typography align='center' className={classes.root} gutterBottom>
          {userName}
        </Typography>
        <Box className='circle' margin={2}>
          <Typography variant="h5">
            {renderArrowIcon('kdRatio')}
            {parseFloat(kdRatio).toFixed(2)}
          </Typography>
          <Typography variant="h5" className={classes.root}>
            K/D Ratio
          </Typography>
        </Box>
        <Divider />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography align='left' variant="h5" className={classes.root} color='textSecondary'>
              Kills
            </Typography>
            <Typography align='left' variant='h4' className={classes.root}>
              {renderArrowIcon('kills')}
              {kills.toLocaleString()}
            </Typography>
            <Typography align='left' variant="h5" className={classes.root} color='textSecondary'>
              Deaths
            </Typography>
            <Typography align='left' variant='h4' className={classes.root}>
              {renderArrowIcon('deaths')}
              {deaths.toLocaleString()}
            </Typography>
            <Typography align='left' variant="h5" className={classes.root} color='textSecondary'>
              Downs
            </Typography>
            <Typography align='left' variant='h4' className={classes.root}>
              {renderArrowIcon('downs')}
              {downs.toLocaleString()}
            </Typography>
            <Typography align='left' variant="h5" className={classes.root} color='textSecondary'>
              Score
            </Typography>
            <Typography align='left' variant='h4' className={classes.root}>
              {renderArrowIcon('score')}
              {score.toLocaleString()}
            </Typography>
            <Typography align='left' variant="h5" className={classes.root} color='textSecondary'>
              Time Played
            </Typography>
            <Typography align='left' variant='h4' className={classes.root}>
              {renderArrowIcon('timePlayed')}
              {displayTimePlayed(timePlayed)}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography align='left' variant="h5" className={classes.root} color='textSecondary'>
              Wins
            </Typography>
            <Typography align='left' variant='h4' className={classes.root}>
              {renderArrowIcon('wins')}
              {wins.toLocaleString()}
            </Typography>
            <Typography align='left' variant="h5" className={classes.root} color='textSecondary'>
              Games Played
            </Typography>
            <Typography align='left' variant='h4' className={classes.root}>
              {renderArrowIcon('gamesPlayed')}
              {gamesPlayed.toLocaleString()}
            </Typography>
            <Typography align='left' variant="h5" className={classes.root} color='textSecondary'>
              Top 5
            </Typography>
            <Typography align='left' variant='h4' className={classes.root}>
              {renderArrowIcon('topFive')}
              {topFive.toLocaleString()}
            </Typography>
            <Typography align='left' variant="h5" className={classes.root} color='textSecondary'>
              Top 10
            </Typography>
            <Typography align='left' variant='h4' className={classes.root}>
              {renderArrowIcon('topTen')}
              {topTen.toLocaleString()}
            </Typography>
            <Typography align='left' variant="h5" className={classes.root} color='textSecondary'>
              Top 25
            </Typography>
            <Typography align='left' variant='h4' className={classes.root}>
              {renderArrowIcon('topTwentyFive')}
              {topTwentyFive.toLocaleString()}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>

  );
}