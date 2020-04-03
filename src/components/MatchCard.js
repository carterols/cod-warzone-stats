import React from 'react';
import { Paper, Typography, Box, makeStyles, Grid, Divider } from '@material-ui/core';
import '../App.css';

const useStyles = makeStyles((theme) => ({
    root: {
      ...theme.typography.button,
    },
    container: {
        padding: theme.spacing(2)
    },
    topDivider: {
        marginBottom: theme.spacing(1)
    }
}));

function getPlacementString(placement) {
    let j = placement % 10, k = placement % 100;
    
    if (j === 1 && k !== 11) {
        return placement + "ST";
    }
    if (j === 2 && k !== 12) {
        return placement + "ND";
    }
    if (j === 3 && k !== 13) {
        return placement + "RD";
    }
    return placement + "TH";
}

export default function MatchCard(props) {
    const classes = useStyles();
    const data = props.data;
    const matchDate = new Date(data.utcStartSeconds * 1000);
    const matchDuration = Math.floor(data.playerStats.timePlayed / 60);

    return (
        <Paper className={classes.container}>
            <Typography variant='h6' className={classes.date} color='textPrimary'>
                {matchDate.toLocaleString()} | {getPlacementString(data.playerStats.teamPlacement)} PLACE | {matchDuration} MINUTES
            </Typography>
            <Divider className={classes.topDivider} />
            <Grid container justify='center' alignItems='center' spacing={3}>
                <Grid item cem sm={3}>
                    <Box className='circle' margin={2}>
                        <Typography align='center' variant="h5">
                            {parseFloat(data.playerStats.kdRatio).toFixed(2)}
                            <Typography align='center' variant="h5" className={classes.root}>
                            K/D Ratio
                            </Typography>
                        </Typography>
                    </Box>
                </Grid>
                {data.teamStats.players.map((player) => {
                    return (
                        <Grid item sm={3}>
                            <Typography align='left' variant="h5" className={classes.root} color={player.username === data.player.username ? 'primary' : 'textSecondary'}>
                                {player.username}
                            </Typography>
                            <Divider />
                            <Typography align='left' variant="h5" className={classes.root} color='textSecondary'>
                                Score
                            </Typography>
                            <Typography align='left' variant='h4' className={classes.root}>
                                {player.playerStats.score.toLocaleString()}
                            </Typography>
                            <Typography variant='h5' className={classes.root} color='textSecondary'>
                                Kills
                            </Typography>
                            <Typography variant='h4' className={classes.root}>
                                {player.playerStats.kills}
                            </Typography>
                            <Typography align='left' variant="h5" className={classes.root} color='textSecondary'>
                                Deaths
                            </Typography>
                            <Typography align='left' variant='h4' className={classes.root}>
                                {player.playerStats.deaths}
                            </Typography>
                            <Typography align='left' variant="h5" className={classes.root} color='textSecondary'>
                                Damage Done
                            </Typography>
                            <Typography align='left' variant='h4' className={classes.root}>
                                {player.playerStats.damageDone}
                            </Typography>  
                            <Typography align='left' variant="h5" className={classes.root} color='textSecondary'>
                                Assists
                            </Typography>
                            <Typography align='left' variant='h4' className={classes.root}>
                                {player.playerStats.assists}
                            </Typography>
                        </Grid>
                    )
                })}          
            </Grid>
        </Paper>
    )

}