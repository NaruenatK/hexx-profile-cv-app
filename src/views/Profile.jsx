import React from 'react'
import { AppBar, Toolbar, Typography, Box, Avatar, TextField } from '@mui/material'
import { FormControlLabel, FormControl, RadioGroup, Button, Radio, IconButton } from '@mui/material'
import { Circle } from '@mui/icons-material'
import GamesIcon from '@mui/icons-material/Games';
import AssistantIcon from '@mui/icons-material/Assistant';
import { Link } from 'react-router-dom'
import ImageMe from "../components/ImageMe";
import Image2 from '../components/Image2';
import DownloadButton from './../components/DownloadButton'
import LinkedInButton from '../components/LinkedInButton';
import GitHubButton from '../components/GitHubButton';
import CustomChip from "../Components/CustomChip";
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import StarsIcon from '@mui/icons-material/Stars';




function Profile() {
    return (
        <>
            <Box>
                <AppBar position="static">
                    <Toolbar sx={{ backgroundColor: 'black' }}>
                        <Typography sx={{ color: '#FFFFFF', ml: '10px', flexGrow: 1 }}>
                            NARUENAT KUMHIRAN
                        </Typography>
                        <Typography sx={{
                            mr: '20px',
                            textDecoration: 'none',
                            color: '#FFFFFF',
                            fontWeight: 'light'
                        }}
                            component={Link} to='/work'
                        >
                            Work
                        </Typography>
                        <Typography sx={{
                            mr: '20px',
                            textDecoration: 'none',
                            color: '#FFFFFF',
                            fontWeight: 'light'
                        }}
                            component={Link} to={'/about'}
                        >
                            About
                        </Typography>
                        <Typography sx={{
                            mr: '20px',
                            textDecoration: 'none',
                            color: '#FFFFFF',
                            fontWeight: 'light'
                        }}
                            component={Link} to={'/contact'}
                        >
                            Contact
                        </Typography>

                    </Toolbar>
                </AppBar >
            </Box>
            <Box sx={{
                mx: 'auto',
                display: 'flex',
                mt: '50px',

                alignItems: 'center',
                flexDirection: "column",
            }}>
                {/* Name & Pic*/}
                <Box sx={{
                    display: 'flex',
                    width: '800px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    backgroundColor: 'black',
                    height: 'justifyContent',
                    // border: '1px solid #FFFFFF'
                }}>
                    {/* Name */}
                    <Box sx={{ flex: 1, mt: '70px' }}>
                        <Typography sx={{ color: '#FFFFFF', fontSize: '25px', fontWeight: 'bold' }}>
                            HI, I AM
                            <br />
                            NARUENAT K.
                        </Typography>
                        <Typography sx={{
                            color: 'gray',
                            fontSize: '10px',
                            fontWeight: 'light',
                            marginTop: '10px',
                            
                        }}>
                            Hello I'm Nine From The Lands Between a Hopeless Soul
                        </Typography>
                        <Button
                            sx={{
                                marginTop: '20px',
                                backgroundColor: '#FFD700',
                                color: 'black',
                                fontSize: '11px',
                                fontWeight: '400',
                                width: '170px',
                                height: '45px',
                                '&:hover': {
                                    backgroundColor: 'gray',
                                }
                            }}
                            variant="contained"
                            endIcon={<Circle sx={{ fontSize: 100 }} />} style={{ borderRadius: '30px', }}
                        >
                            CONTACT Me
                        </Button>
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
                            <AssistantIcon sx={{ color: '#FFD700', fontSize: '30px' }} />
                        </IconButton>
                    </Box>

                    {/* Picture */}
                    <Box sx={{ ml: '160px', flex: 1 }}>
                        <ImageMe />
                    </Box>
                </Box>

                {/* About Me */}
                <Box sx={{
                    display: 'flex',
                    backgroundColor: 'black',
                    height: 'justifyContent',
                    width: '800px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    mt: '50px',
                    // border: '1px solid #FFFFFF'
                }}>
                    <Typography sx={{
                        color: '#FFFFFF',
                        fontSize: '30px',
                        fontWeight: 'bold',
                        mt: '20px'
                    }}>
                        ABOUT ME
                    </Typography>
                    <Typography sx={{
                        flex: 1,
                        ml: '100px',
                        mt: '20px',
                        fontSize: '12px',
                        fontWeight: 'bold',

                    }}>
                        " I walk between light and shadow, between truth and myth. My past is ash, my future unwritten. 
                        But make no mistake — I see the world as it is, and I will shape it as I see fit "
                    </Typography>
                </Box>

                {/* About Me Subhead*/}
                <Box sx={{
                    width: '800px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    // border: '1px solid #FFFFFF'
                }}>
                    <Typography sx={{
                        flex: 1,
                        color: 'gray',
                        ml: '340px',
                        mt: '20px',
                        fontWeight: '400',
                        fontSize: '10px'

                    }}>
                        " Magic is not a gift — it’s a burden carried by the curious and the bold. 
                        I’ve walked ancient paths, spoken forgotten names, and bent the stars to my will. Power lies not in strength, but in understanding "


                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        ml: '340px',
                        mt: '20px'
                    }}>

                        <DownloadButton />
                        <LinkedInButton />
                        <GitHubButton />
                    </Box>
                    <Image2 sx={{}} />
                </Box>

                {/* My Capabilities */}
                <Box sx={{
                    display: 'flex',
                    backgroundColor: 'black',
                    width: '800px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    mt: '50px',
                    // border: '1px solid #FFFFFF'
                }}>
                    <Typography sx={{
                        color: '#FFFFFF',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        mt: '20px'
                    }}>
                        My Capabilities
                    </Typography>
                    <Typography sx={{
                        flex: 1,
                        ml: '45px',
                        mt: '25px',
                        fontWeight: '200',
                        fontSize: '15px'

                    }}>
                        Magic is my craft. Ancient power and knowledge bend to my will — discipline and vision shape my journey.


                    </Typography>

                </Box>

                {/* Chip in My Capabilities */}
                <Box sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 2,
                    mt: '20px',
                    ml: '350px'
                }}>
                    <CustomChip label="SPELL" variant="outlined" />
                    <CustomChip label="FAITH" variant="outlined" />
                    <CustomChip label="MAGIC" variant="outlined" />
                    <CustomChip label="KNOWLEDGE" variant="outlined" />

                </Box>
                <Box sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 2,
                    mt: '20px',
                    ml: '275px',

                }}>
                    <CustomChip label="SORCERER" variant="outlined" />
                    <CustomChip label="APENTICE" variant="outlined" />
                    <CustomChip label="REACT" variant="outlined" />
                    
                </Box>
                {/* My Experience */}
                <Box sx={{
                    display: 'flex',
                    backgroundColor: 'black',
                    width: '800px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    mt: '50px',
                    justifyContent: 'space-between',
                    // border: '1px solid #FFFFFF'
                }}>
                    <Typography sx={{
                        color: '#FFFFFF',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        mt: '20px'
                    }}>
                        My Experience
                    </Typography>
                    <Typography sx={{
                        flex: 1,
                        ml: '75px',
                        mt: '28px',
                        fontSize: '18px',
                        fontWeight: '400',

                    }}>
                        The Arcane Seeker
                    </Typography>

                    <Typography sx={{
                        fontSize: '7px',
                        mt: '40px',
                        fontWeight: '200',
                    }}>
                        Nov 2023 - Present
                    </Typography>
                </Box>

                {/* My Experience Subhead*/}
                <Box sx={{
                    width: '800px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    // border: '1px solid #FFFFFF'
                }}>
                    <Typography sx={{
                        flex: 1,
                        color: 'gray',
                        mt: '20px',
                        ml: '340px',
                        fontWeight: '200',
                        fontSize: '15px'

                    }}>
                        I’ve studied the ancient texts and unlocked the secrets of forgotten realms. 
                        My power is drawn from knowledge and controlled with careful discipline, gained through years of intense study and practice.
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        ml: '340px',
                        mt: '20px'
                    }}>
                    </Box>

                </Box>

                {/* Let's Connect */}
                <Box
                    sx={{
                        backgroundColor: '#000000',
                        color: 'white',
                        padding: '40px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        mt: '60px',
                        width: '870px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }}
                >
                    <Box sx={{ flex: 1, maxWidth: '400px' }}>
                        <Typography sx={{
                            color: '#FFFFFF',
                            fontSize: '20px',
                            fontWeight: 'bold',
                            mb: '10px'
                            
                        }}>
                            LET'S CONNECT
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: '5px' }}>
                            Send me an email at {""}
                            <Link style={{
                                fontSize: '15px',
                                color: '#ffffff',
                                textDecorationColor: '#FFD700'
                                
                                
                            }}>
                                Naruenat_k@gmail.com                            </Link>

                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
                            Nice to meet you {""}

                            <Link style={{
                                color: '#ffffff',
                                textDecorationColor: '#FFD700'
                            }}>
                                Tarnished
                            </Link>

                        </Typography>
                        <Box sx={{ display: 'flex', marginBottom: '40px' }}>
                            <IconButton sx={{ color: '#FFD700' }}>
                                <GamesIcon />
                            </IconButton>
                            <IconButton sx={{ color: '#FFD700' }}>
                                <AssistantIcon />
                            </IconButton>
                            <IconButton sx={{ color: '#FFD700' }}>
                                <ImportContactsIcon />
                            </IconButton>
                            <IconButton sx={{ color: '#FFD700' }}>
                                <StarsIcon />
                            </IconButton>
                        </Box>
                        <Typography variant="body2" sx={{
                            fontSize: '0.8rem',
                            mt: '170px',
                            fontWeight: '200'
                        }}>
                            © 2025 NARUENAT KUMHIRAN
                        </Typography>
                    </Box>

                    <Box sx={{ flex: 1, maxWidth: '450px' }}>
                        <TextField label="Name" variant="filled" fullWidth sx={{ marginBottom: '15px', input: { color: 'white' }, label: { color: 'white' }, fieldset: { borderColor: '#333333' }, backgroundColor: '#222222', width: '450px' }} />

                        <TextField label="Email" variant="filled" fullWidth sx={{ marginBottom: '15px', input: { color: 'white' }, label: { color: 'white' }, fieldset: { borderColor: '#333333' }, backgroundColor: '#222222' }} />

                        <TextField label="Class" variant="filled" fullWidth sx={{ marginBottom: '15px', input: { color: 'white' }, label: { color: 'white' }, fieldset: { borderColor: '#333333' }, backgroundColor: '#222222' }} />

                        <TextField label="Message" variant="filled" multiline rows={4} fullWidth sx={{ marginBottom: '20px', input: { color: 'white' }, label: { color: 'white' }, fieldset: { borderColor: '#333333' }, backgroundColor: '#222222' }} />

                        <Button variant="contained" sx={{
                            backgroundColor: '#FFD700',
                            color: 'black',
                            borderRadius: '30px',
                            mb: '50px',

                            '&:hover':
                                { backgroundColor: '#FFD700' }
                        }}>
                            SUBMIT
                        </Button>
                    </Box>
                </Box>
            </Box>

        </>
    )
}
export default Profile