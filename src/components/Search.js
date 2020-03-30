import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Icon from '@material-ui/core/Icon';
import PSNIcon from '../icons/psn.svg';
import XboxIcon from '../icons/xbox.svg';
import BattleNetIcon from '../icons/battle-net.svg';
import '../App.css';

export default function Search(props) {
    const [platform, setPlatform] = useState('battle');
    const [user, setUser] = useState('');

    const handleImgClick = (e) => {
        setPlatform(e.currentTarget.firstChild.firstChild.firstChild.getAttribute('data-value'));
    };

    const handleSearchChange = (e) => {
        setUser(e.target.value)
    }

    const checkForSubmit = (e) => {
        if (e.key === 'Enter') {
            props.search(user, platform);
        }
    }

    return (
        <TextField
            onChange={handleSearchChange}
            onKeyPress={checkForSubmit}
            InputProps={{
                placeholder: "Search",
                startAdornment: (
                    <>
                        <InputAdornment>
                            <IconButton color='inherit' onClick={handleImgClick} >
                                <Icon>
                                    <img 
                                    data-value='battle'
                                    src={BattleNetIcon}
                                    alt="Battle.net icon" 
                                    className={(platform === 'battle' ? 'icon-selected' : '')} />
                                </Icon>
                            </IconButton>
                        </InputAdornment>
                        <InputAdornment>
                            <IconButton color='inherit' onClick={handleImgClick} >
                                <Icon>
                                    <img 
                                    data-value='psn' 
                                    src={PSNIcon}
                                    alt="PSN icon"
                                    className={(platform === 'psn' ? 'icon-selected' : '')} />
                                </Icon>
                            </IconButton>
                        </InputAdornment>
                        <InputAdornment>
                            <IconButton color='inherit' onClick={handleImgClick} >
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
                    <IconButton color='primary' onClick={e => props.search(user, platform)}>
                        <AddCircleOutlineIcon />
                    </IconButton>
                )
            }} 
            fullWidth={true} />
    )
}


