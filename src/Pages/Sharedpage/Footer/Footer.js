import React from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import VideoLibraryRoundedIcon from '@mui/icons-material/VideoLibraryRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1, mt: 3, bgcolor: 'text.primary' }}>
            <Container>
                <Grid container spacing={3} sx={{ textAlign: 'left', color: 'white', p: 3 }} columns={{ xs: 12, sm: 12, md: 10 }}>

                    <Grid xs={6} md={2} sx={{ borderColor: 'grey.500', borderBottom: 1, p: 1 }} >
                        <Typography sx={{ fontWeight: 500 }} variant="h6" component="div">
                            VEHICLES
                        </Typography>
                        <Typography variant="p" gutterBottom component="div">
                            PASSENGER AND COMMERCIAL
                        </Typography>
                        <Typography variant="p" component="div">
                            INDUSTRIAL EQUIPMENT
                        </Typography>
                    </Grid>
                    <Grid xs={6} md={2} sx={{ borderColor: 'grey.500', borderBottom: 1, p: 1 }}>
                        <Typography sx={{ fontWeight: 500 }} variant="h6" component="div">
                            AFTERSALES
                        </Typography>
                        <Typography variant="p" gutterBottom component="div">
                            PASSENGER AND COMMERCIAL
                        </Typography>
                        <Typography variant="p" component="div">
                            GENUINE SPARE PARTS
                        </Typography>
                    </Grid>
                    <Grid xs={6} md={2} sx={{ borderColor: 'grey.500', borderBottom: 1, p: 1 }}>
                        <Typography sx={{ fontWeight: 500 }} variant="h6" component="div">
                            COMPANY
                        </Typography>
                        <Typography variant="p" gutterBottom component="div">
                            ABOUT US
                        </Typography>
                        <Typography variant="p" component="div">
                            MM MOTORS LTD
                        </Typography>
                    </Grid>
                    <Grid xs={6} md={2} sx={{ borderColor: 'grey.500', borderBottom: 1, p: 1 }}>
                        <Typography sx={{ fontWeight: 500 }} variant="h6" component="div">
                            CAREER
                        </Typography>
                        <Typography variant="p" gutterBottom component="div">
                            LIFE AT MM MOTORS
                        </Typography>
                        <Typography variant="p" component="div">
                            JOB OPENING
                        </Typography>
                    </Grid>
                    <Grid xs={6} md={2} sx={{ borderColor: 'grey.500', borderBottom: 1, p: 1 }}>
                        <Typography sx={{ fontWeight: 500 }} variant="h6" component="div">
                            OTHERS
                        </Typography>
                        <Typography variant="p" gutterBottom component="div">
                            PRIVACY POLICY
                        </Typography>
                        <Typography variant="p" component="div">
                            SAFETY RECALL
                        </Typography>
                    </Grid>

                </Grid>
                <Grid container spacing={3} sx={{ textAlign: 'left', color: 'white', p: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                    <Grid xs={6} md={2} sx={{ p: 1 }}>
                        <Typography sx={{ fontWeight: 500 }} variant="h6" component="div">
                            ADDRESS
                        </Typography>
                        <Typography variant="p" component="div">
                            MM MOTORS TOWER
                        </Typography>
                        <Typography variant="p" component="div">
                            3700, LAKSHMIPUR
                        </Typography>
                    </Grid>
                    <Grid xs={6} md={4} sx={{ p: 1 }}>
                        <Typography sx={{ fontWeight: 500, textAlign: 'center' }} variant="h6" component="div">
                            SOCIAL MEDIA
                        </Typography>
                        <FacebookRoundedIcon style={{ fontSize: '40px', backgroundColor: 'blue', borderRadius: '20px', marginRight: '5px' }} />
                        <VideoLibraryRoundedIcon style={{ fontSize: '40px', color: 'red', borderRadius: '20px' }} />
                        <MailOutlineRoundedIcon style={{ fontSize: '40px', color: 'yellow', borderRadius: '20px' }} />
                    </Grid>
                    <Grid xs={12} md={6} sx={{ p: 1 }}>
                        <Typography sx={{ fontWeight: 500, textAlign: 'center' }} variant="h6" component="div">
                            DOWNLOAD OUR APP
                        </Typography>
                        <img src={'https://i.ibb.co/fxSVWsR/googleplay.png'} style={{ borderRadius: '12px', width: '140px', marginRight: '6px' }} />
                        <img src={'https://i.ibb.co/8YpYR8L/applestore.png'} style={{ borderRadius: '12px', width: '140px', marginRight: '6px' }} />
                        <img src={'https://i.ibb.co/MD11wKg/huawei.png'} style={{ borderRadius: '12px', width: '140px', marginRight: '6px' }} />
                    </Grid>
                </Grid>
                <Typography sx={{ fontWeight: 500, P: 3, color: 'yellow' }} variant="p" component="div">
                    &copy; 2020-2021 MM MOTORS LTD. ALL RIGHTS RESERVED. | Made By MEHERAJ MUHAMMAD
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;