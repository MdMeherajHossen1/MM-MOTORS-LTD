import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Car from '../Car/Car';


const Cars = () => {
    const [cars, setCars] = useState([])
    useEffect(() => {
        fetch('https://mysterious-atoll-03905.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    return (
        <Box sx={{ flexGrow: 1, py: 3, bgcolor: '#1C0C5B' }}>
            <Container>

                <Typography sx={{ fontWeight: 500, mt: 5 }} variant="h3" component="div">
                    Our Car's Collection is Here
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        cars?.slice(0, 6)?.map(car => <Car
                            key={car._id}
                            car={car}
                        ></Car>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Cars;