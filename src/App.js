import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import { Container, Grid } from '@material-ui/core';
import userService from './service/userService';
import StatCard from './components/StatCard';
import './App.css';

function App() {
  const [searchResults, setSearchResults] = useState(null);

  const searchUser = async (user, platform) => {
    const results = await userService.getUser(user, platform);
    console.log(results);
    setSearchResults(results.data.lifetime.mode.br.properties);  
  }

  const renderSearchResults = () => {
    return (
      Object.keys(searchResults).map((key) => {
        return (
          <Grid item xs={4}>
            <StatCard key={key} className="stat-card" title={key[0].toUpperCase() + key.slice(1)} stat={searchResults[key]} />
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
            {searchResults ? renderSearchResults() : <div></div>}
          </Grid>
        </Container>
    </div>
  );
}

export default App;
