import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import { Container, Grid, IconButton } from '@material-ui/core';
import userService from './service/userService';
import StatCard from './components/StatCard';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import './App.css';

function getMax(value1, idx1, value2, idx2) {
  if (value1 > value2) return idx1
  else return idx2;
}

function getStatColors(idx, users) {
  let colors = {};
  let maxStats = {};

  if (users.length < 2) {
    Object.keys(users[idx]).forEach(key => {
      colors[key] = 'none';
    });

    return colors;
  }

  for (let i = 0; i < users.length; i++) {
    if (i !== idx) {
      Object.keys(users[idx]).forEach(key => {
        const maxIdx = getMax(users[idx][key], idx, users[i][key], i);
        if (maxStats.hasOwnProperty(key) && users[maxIdx][key] > users[maxStats[key]][key]) {
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

function App() {
  const [users, setUsers] = useState([]);

  const searchUser = async (user, platform) => {
    const results = await userService.getUser(user, platform);
    console.log(results);
    let player = results.data.lifetime.mode.br.properties;
    player['userName'] = results.data.username;
    let players = [...users, player];
    players = players.map((p, idx) => {
      return {
        ...p,
        colors: getStatColors(idx, players)
      }
    })
    setUsers(players);  
  }

  const renderSearchResults = () => {
    return (
      users.map((user, idx) => {
        return (
          <Grid item xs={6}>
            <StatCard data={user} />
          </Grid>
        )
      })
    );
  }

  return (
    <div>
        <Navbar />
        <Container maxWidth="md">
          <Search search={searchUser} />
          <Grid container spacing={3} className="stats-container">
            {users.length > 0 ? renderSearchResults() : null}
          </Grid>
        </Container>
    </div>
  );
}

export default App;
