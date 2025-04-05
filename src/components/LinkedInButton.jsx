import React from 'react'
import { IconButton } from '@mui/material';
import GamesIcon from '@mui/icons-material/Games';


function LinkedInButton() {
    return (
        <div>
            <IconButton
                sx={{
                    ml: '15px',
                    marginTop: '20px',
                    backgroundColor: '#2f2f2f',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    '&:hover': {
                        backgroundColor: 'darkgray',
                    }
                }}
            >
                <GamesIcon sx={{ color: '#FFD700', fontSize: '30px' }} />
            </IconButton>
        </div >
    )
}

export default LinkedInButton