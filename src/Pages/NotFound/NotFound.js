import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Navigation from '../Sharedpage/Navigation/Navigation';
import Footer from '../Sharedpage/Footer/Footer';
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
        <Box sx={{ flexGrow: 1, bgcolor: '#1C0C5B', p: 3 }}>
            <Navigation></Navigation>
            <Typography variant="h1" sx={{ my: 5, color: 'white' }} >
                404..... NOT FOUND THIS URL
            </Typography>
            <Link to="/"><Button variant="contained" sx={{ width: "75%", my: 3, bgcolor: 'secondary.main' }} type="submit">GO BACK TO HOME</Button></Link>

            <Footer></Footer>
        </Box>
    );
};

export default NotFound;