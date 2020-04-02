import React from 'react';
import { Paper, Typography, Box, makeStyles, Grid } from '@material-ui/core';
import '../App.css';

const useStyles = makeStyles((theme) => ({
    root: {
      ...theme.typography.button,
    },
    container: {
        padding: theme.spacing(2)
    }
}));

function getPlacementString(placement) {
    let j = placement % 10, k = placement % 100;
    
    if (j === 1 && k !== 11) {
        return placement + "st";
    }
    if (j === 2 && k !== 12) {
        return placement + "nd";
    }
    if (j === 3 && k !== 13) {
        return placement + "rd";
    }
    return placement + "th";
}

export default function MatchCard(props) {
    const classes = useStyles();
    const data = props.data;
    const matchDate = new Date(data.utcStartSeconds * 1000);
    const matchDuration = Math.floor(data.playerStats.timePlayed / 60);

    return (
        <Paper className={classes.container}>
            <Typography variant='h6' className={classes.date} color='textPrimary'>
                {matchDate.toLocaleString()} - {getPlacementString(data.playerStats.teamPlacement)} Place
            </Typography>
            <Grid container spacing={3}>
                <Grid item sm={4}>
                    <Box className='circle' margin={2}>
                        <Typography align='center' variant="h5">
                            {parseFloat(data.playerStats.kdRatio).toFixed(2)}
                            <Typography align='center' variant="h5" className={classes.root}>
                            K/D Ratio
                            </Typography>
                        </Typography>
                    </Box>
                </Grid>
                <Grid item sm={4}>
                    <Typography align='left' variant="h5" className={classes.root} color='textSecondary'>
                        Match Duration
                    </Typography>
                    <Typography align='left' variant='h4' className={classes.root}>
                        {matchDuration} min.
                    </Typography>
                    <Typography align='left' variant="h5" className={classes.root} color='textSecondary'>
                        Score
                    </Typography>
                    <Typography align='left' variant='h4' className={classes.root}>
                        {data.playerStats.score.toLocaleString()}
                    </Typography>
                </Grid>
                <Grid item sm={4}>
                    <Typography variant='h5' className={classes.root} color='textSecondary'>
                        Kills
                    </Typography>
                    <Typography variant='h4' className={classes.root}>
                        {data.playerStats.kills}
                    </Typography>
                    <Typography align='left' variant="h5" className={classes.root} color='textSecondary'>
                        Deaths
                    </Typography>
                    <Typography align='left' variant='h4' className={classes.root}>
                        {data.playerStats.deaths}
                    </Typography>
                    <Typography align='left' variant="h5" className={classes.root} color='textSecondary'>
                        Damage Done
                    </Typography>
                    <Typography align='left' variant='h4' className={classes.root}>
                        {data.playerStats.damageDone}
                    </Typography>  
                    <Typography align='left' variant="h5" className={classes.root} color='textSecondary'>
                        Assists
                    </Typography>
                    <Typography align='left' variant='h4' className={classes.root}>
                        {data.playerStats.assists}
                    </Typography>
                  
                </Grid>                
            </Grid>
        </Paper>
    )

}