import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import AllCar from './AllCar/AllCar';


const ManageCars = () => {
    const [cars, setCars] = useState([])
    const [deleted, setDeleted] = useState(false)
    useEffect(() => {
        fetch('https://mysterious-atoll-03905.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [deleted])

    const handleDelete = id => {
        const confirmMessage = window.confirm("Are you sure ? You want to Cencel your Order?")
        if (confirmMessage) {
            fetch(`https://mysterious-atoll-03905.herokuapp.com/cars/${id}`, { method: "DELETE" })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Successfuly Cancel Your Order')
                        const remaining = cars.filter(od => od._id !== id)
                        setCars(remaining)
                        setDeleted(true)
                    }
                    else {
                        setDeleted(false)
                    }
                })
        }
    }
    return (
        <Box sx={{ flexGrow: 1, py: 3, bgcolor: '#1C0C5B' }}>
            <Container>

                <Typography sx={{ fontWeight: 500, my: 1, color: 'white' }} variant="h3" component="div">
                    Our Car's Collection is Here
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        cars?.map(car => <AllCar
                            key={car._id}
                            car={car}
                            handleDelete={handleDelete}
                        ></AllCar>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default ManageCars;