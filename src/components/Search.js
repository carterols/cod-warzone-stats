import React, { useState } from 'react';
import { TextField, InputAdornment } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import Icon from '@material-ui/core/Icon';
import PSNIcon from '../icons/psn.svg';
import XboxIcon from '../icons/xbox.svg';
import BattleNetIcon from '../icons/battle-net.svg';
import '../App.css';

export default function Search(props) {
    const [platform, setPlatform] = useState('battle');
    const [user, setUser] = useState('');

    const handleImgClick = (e) => {
        setPlatform(e.target.getAttribute('data-value'));
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
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
                endAdornment: (
                    <>
                        <InputAdornment>
                            <Icon>
                                <img 
                                data-value='battle'
                                src={BattleNetIcon}
                                alt="Battle.net icon" 
                                onClick={handleImgClick} 
                                className={'icon-hoverable ' + (platform === 'battle' ? 'icon-selected' : '')} />
                            </Icon>
                        </InputAdornment>
                        <InputAdornment>
                            <Icon>
                                <img 
                                data-value='psn' 
                                src={PSNIcon}
                                alt="PSN icon"
                                onClick={handleImgClick} 
                                className={'icon-hoverable ' + (platform === 'psn' ? 'icon-selected' : '')} />
                            </Icon>
                        </InputAdornment>
                        <InputAdornment>
                            <Icon>
                                <img 
                                data-value='xbl'
                                src={XboxIcon}
                                alt="Xbox icon" 
                                onClick={handleImgClick} 
                                className={'icon-hoverable ' + (platform === 'xbl' ? 'icon-selected' : '')} />
                            </Icon>
                        </InputAdornment>
                    </>
                )
            }} 
            fullWidth={true} />
    )
}


