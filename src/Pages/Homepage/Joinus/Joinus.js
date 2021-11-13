import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material'
import Box from '@mui/material/Box';
const Joinus = () => {
    return (
        <Box sx={{ flexGrow: 1, bgcolor: '#1C0C5B', py: 3 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, color: 'white', m: 2 }} variant="h5" component="div">
                    Join Us
                </Typography>
                <Typography sx={{ fontWeight: 500, color: 'white', m: 2 }} variant="h5" component="div">
                    Be part of MM MOTORS STORY
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>

                    <Grid item xs={12} md={6}>
                        <Box style={{ display: 'flex', backgroundColor: 'lightblue', borderRadius: '12px', padding: '10px' }} >
                            <Grid>
                                <img src={'https://i.ibb.co/NYtw2KN/job.png'} style={{ borderRadius: '10px' }} alt="" />
                            </Grid>
                            <Grid sx={{ p: 3, }}>
                                <Typography sx={{ fontWeight: 500 }} variant="h5" component="div">
                                    Build your career
                                </Typography>
                                <Typography sx={{ fontWeight: 500 }} variant="p" component="div">
                                    Join the dynamic team that makes it all happen
                                </Typography>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box style={{ display: 'flex', backgroundColor: 'lightblue', borderRadius: '12px', padding: '10px' }} >
                            <Grid>
                                <img src={'https://i.ibb.co/hZk5SRW/employer.png'} style={{ borderRadius: '10px' }} alt="" />
                            </Grid>
                            <Grid sx={{ p: 3, }}>
                                <Typography sx={{ fontWeight: 500 }} variant="h5" component="div">
                                    Become a partner
                                </Typography>
                                <Typography sx={{ fontWeight: 500 }} variant="p" component="div">
                                    Reach more customers and achieve growth with us
                                </Typography>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Joinus;