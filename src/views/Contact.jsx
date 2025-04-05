import React from 'react'
import { AppBar, Toolbar, Typography, Box, Avatar, TextField } from '@mui/material'


function Contact() {

    return (
        <div>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Typography sx={{
                    color: '#FFFFFF',
                    fontSize: '100px',
                    fontWeight: 'bold'
                }}>
                    Contact
                </Typography>
            </Box>

        </div>
    )
}

export default Contact