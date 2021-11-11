import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Car from '../Homepage/Car/Car';
import Navigation from '../Sharedpage/Navigation/Navigation';
import Footer from '../Sharedpage/Footer/Footer';


const AllCars = () => {
    const [cars, setCars] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    return (
        <Box sx={{ flexGrow: 1, my: 3, bgcolor: '#1C0C5B' }}>
            <Navigation></Navigation>
            <Container>
                <Typography sx={{ fontWeight: 500, color: 'info.main', m: 2 }} variant="h5" component="div">
                    All Cars in our collection
                </Typography>
                <Typography sx={{ fontWeight: 500, mt: 5 }} variant="h3" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        cars?.map(car => <Car
                            key={car._id}
                            car={car}
                        ></Car>)
                    }
                </Grid>
            </Container>
            <Footer></Footer>
        </Box>
    );
};

export default AllCars;