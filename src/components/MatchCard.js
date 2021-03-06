import React from 'react';
import { Icon, Paper, Typography, Box, makeStyles, Grid, Divider } from '@material-ui/core';
import '../App.css';
import Trophy from '../icons/trophy.svg';

const useStyles = makeStyles((theme) => ({
    root: {
      ...theme.typography.button,
    },
    container: {
        padding: theme.spacing(2)
    },
    topDivider: {
        marginBottom: theme.spacing(1)
    },
    firstPlacement: {
        color: '#FFD700 !important'
    },
    fifthPlacement: {
        color: '#D5D5D7 !important'
    },
    fifteenPlacement: {
        color: '#DA9F65 !important'
    },
    kdColumn: {
        textAlign: 'center'
    },
    centerCircle: {
        marginTop: '16px',
        marginBottom: '16px',
        marginLeft: 'auto',
        marginRight: 'auto'
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

function getColumnWidth(numPlayers) {
    switch (numPlayers) {
        case 4:
            return 2;
        case 3:
            return 3;
        case 2:
            return 4;
        default:
            return 6;
    }
}

function getTeamKills(players) {
    let kills = 0;
    players.forEach((player) => {
        kills += player.playerStats.kills;
    });
    return kills;
}

export default function MatchCard(props) {
    const classes = useStyles();
    const data = props.data;
    const matchDate = new Date(data.utcStartSeconds * 1000);
    const matchDuration = Math.floor(data.playerStats.timePlayed / 60);
    const columnWidth = getColumnWidth(data.teamStats.players.length);
    const teamKills = getTeamKills(data.teamStats.players);

    function getPlacementColor(placement) {
        if (placement === 1) {
            return classes.firstPlacement;
        } else if (placement <= 5) {
            return classes.fifthPlacement;
        } else if (placement <= 15) {
            return classes.fifteenPlacement;
        } else {
            return null;
        }
    }

    function getTrophy(placement) {
        let placementColor = '';
        if (placement === 1) {
            placementColor = 'first-placement-svg';
        } else if (placement <= 5) {
            placementColor = 'fifth-placement-svg';
        } else if (placement <= 15) {
            placementColor = 'fifteen-placement-svg';
        }
        if (placement <= 15) {
            return (
                <Icon fontSize='inherit'>
                    <img
                        data-value='battle'
                        src={Trophy}
                        alt="Battle.net icon"
                        className={placementColor}
                    />
                </Icon>
            )
        }
    }

    return (
        <Paper className={classes.container}>
            <Grid container justify='center' spacing={3} wrap='wrap'>
                <Grid item xs={6}>
                    <Typography variant='h6' align='left' color='textPrimary'>
                        {matchDate.toLocaleString()}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant='h6' align='right' className={getPlacementColor(data.playerStats.teamPlacement)}>
                        {getTrophy(data.playerStats.teamPlacement)}
                        &nbsp;
                        {getPlacementString(data.playerStats.teamPlacement)} PLACE
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid item xs={12} sm>
                    <Typography align='center' variant="h5" className={classes.root}>
                        KILLS: {teamKills} 
                    </Typography>
                    <Box className={'circle ' + classes.centerCircle}>
                        <Typography align='center' variant="h5">
                            {parseFloat(data.playerStats.kdRatio).toFixed(2)}
                        </Typography>
                        <Typography align='center' variant="h5" className={classes.root}>
                            K/D Ratio
                        </Typography>
                    </Box>
                </Grid>
                {data.teamStats.players.map((player, idx) => {
                    return (
                        <Grid item key={idx} xs={6} sm>
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