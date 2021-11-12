import { Box, Button, Grid } from '@mui/material';
import React from 'react';
import Typography from '@mui/material/Typography';
import bimage from '../../../images/banner1.png'
const Banner = () => {
    const bannerBg = {
        backgroundImage: `url(${bimage})`,
        backgroundPosition: 'center',
        backgroundCover: 'cover ',
        backgroundBlendMode: 'darken, luminosity',
        backgroundColor: 'rgba(0,0,0,0.5)',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh'
    }
    return (
        <Box sx={{ flexGrow: 1 }} style={bannerBg} display="flex"
            width={500} height={80}
            bgcolor="lightgreen"
            alignItems="center"
            justifyContent="center">
            <Box>
                <Typography variant="h2" component="div" sx={{ pt: 3, color: 'white', fontWeight: 'bold' }}>
                    Welcome to <span style={{ color: '#FF0000', fontWeight: 'bold' }}> MM MOTORS LTD</span>
                </Typography>
                <Typography variant="h4" component="div" gutterBottom sx={{ color: 'white' }}>
                    The way it should be
                </Typography>
                <Button variant="contained" sx={{ bgcolor: '#1C0C5B' }}>Find your Car</Button>
            </Box>

        </Box>
    );
};

export default Banner;