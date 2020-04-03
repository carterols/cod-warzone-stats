import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton, makeStyles } from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Icon from '@material-ui/core/Icon';
import PSNIcon from '../icons/psn.svg';
import XboxIcon from '../icons/xbox.svg';
import BattleNetIcon from '../icons/battle-net.svg';
import '../App.css';

const useStyles = makeStyles(theme => ({
    platformButton: {
        padding: '4px',
        marginRight: '2px'
    },
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: theme.spacing(0.5),
    },
    chip: {
        margin: theme.spacing(0.5),
    },
}));

export default function Search(props) {
    const classes = useStyles();
    const [platform, setPlatform] = useState('battle');
    const [user, setUser] = useState('');
    const searches = props.cookies.get('search_history');

    function getSearchResults() {
        if (searches) {
            if (searches.hasOwnProperty(platform)) {
                return Object.keys(searches[platform]);
            }
        }
        return [];
    }

    const handleImgClick = (e) => {
        setPlatform(e.currentTarget.firstChild.firstChild.firstChild.getAttribute('data-value'));
    };

    const handleSearchChange = (e, val) => {
        setUser(val);
    }

    const search = async () => {
        if (!user || user.length === 0) return;

        const success = await props.search(user, platform);

        if (success) {
            let searches = props.cookies.get('search_history');
            
            props.cookies.set('lastSearchedUser', JSON.stringify({
                userName: user,
                platform: platform
            }), { path: '/', maxAge: 60 * 60 * 24 * 5 });
            
            if (!searches) {
                searches = {};
            }

            if (!searches.hasOwnProperty(platform)) {
                searches[platform] = {}
            }
            if (!searches[platform].hasOwnProperty(user.toLowerCase())) {
                searches[platform][user.toLowerCase()] = user;
            }
            // set cookies to expire in 1 year
            props.cookies.set('search_history', JSON.stringify(searches), { path: '/', maxAge: 60 * 60 * 24 * 365 })
        }
        setUser('');
    }

    const checkForSubmit = (e) => {
        if (e.key === 'Enter') {
            search();
        }
    }

    function getPlaceholder() {
        if (platform === 'battle') return 'Search Battle.net...';
        else if (platform === 'psn') return 'Search PlayStation Network...';
        else return 'Search Xbox Live...';
    }

    const renderTextField = (params) => {
        params.inputProps.onKeyDown = checkForSubmit;
        return (
            <TextField
                {...params}
                placeholder={getPlaceholder()}
                InputProps={{
                    ...params.InputProps,
                    placeholder: getPlaceholder(),
                    startAdornment: (
                        <>
                            <InputAdornment style={{ marginBottom: '5px' }}>
                                <IconButton className={classes.platformButton} color='inherit' onClick={handleImgClick} >
                                    <Icon>
                                        <img
                                            data-value='battle'
                                            src={BattleNetIcon}
                                            alt="Battle.net icon"
                                            className={(platform === 'battle' ? 'icon-selected' : '')} />
                                    </Icon>
                                </IconButton>
                            </InputAdornment>
                            <InputAdornment style={{ marginBottom: '5px' }}>
                                <IconButton className={classes.platformButton} color='inherit' onClick={handleImgClick} >
                                    <Icon>
                                        <img
                                            data-value='psn'
                                            src={PSNIcon}
                                            alt="PSN icon"
                                            className={(platform === 'psn' ? 'icon-selected' : '')} />
                                    </Icon>
                                </IconButton>
                            </InputAdornment>
                            <InputAdornment style={{ marginBottom: '5px' }}>
                                <IconButton className={classes.platformButton} color='inherit' onClick={handleImgClick} >
                                    <Icon>
                                        <img
                                            data-value='xbl'
                                            src={XboxIcon}
                                            alt="Xbox icon"
                                            className={(platform === 'xbl' ? 'icon-selected' : '')} />
                                    </Icon>
                                </IconButton>
                            </InputAdornment>
                        </>
                    ),
                    endAdornment: (
                        <InputAdornment style={{ marginBottom: '5px' }}>
                            <IconButton color='primary' onClick={e => search(user, platform)}>
                                <AddCircleOutlineIcon />
                            </IconButton>
                        </InputAdornment>
                    )
                }}
                fullWidth={true}
            />
        )
    }

    return (

        <Autocomplete
            freeSolo
            options={getSearchResults()}
            getOptionLabel={option => option}
            openOnFocus={false}
            value={user}
            filterSelectedOptions
            onChange={(e, newUser) => setUser(newUser)}
            onInputChange={handleSearchChange}
            renderInput={renderTextField}
        />
    )
}


