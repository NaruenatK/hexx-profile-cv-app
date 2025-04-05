import React from 'react'
import { Button } from '@mui/material';
import Circle from '@mui/icons-material/Circle';


function DownloadButton() {
    return (
        <div>
            <Button
                sx={{
                    marginTop: '20px',
                    backgroundColor: '#FFD700',
                    color: 'black',
                    fontSize: '12px',
                    fontWeight: '500',
                    width: '200px',
                    height: '50px',
                    '&:hover': {
                        backgroundColor: 'gray',
                    }
                }}
                variant="contained"
                endIcon={<Circle sx={{ fontSize: 100 }} />} style={{ borderRadius: '30px', }}
            >
                invite to party
            </Button>
        </div>

    )
}

export default DownloadButton