import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';


const AddaCar = () => {
    const [car, setCar] = useState({})
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newCar = { ...car }
        newCar[field] = value;
        setCar(newCar)
    }
    const handleOnSubmit = e => {
        fetch('https://mysterious-atoll-03905.herokuapp.com/cars', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(car)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Congratulation, Your orders has successfuly done.')


                }
            })
        e.preventDefault();
    }
    return (
        <Box sx={{ flexGrow: 1, bgcolor: '#1C0C5B', p: 3 }}>

            <Typography variant="h4" sx={{ mt: 3, color: 'white' }} >
                ADD A NEW CAR IN THE CAR COLLECTION
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} sx={{ my: 3, px: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>

                <Grid item xs={12} md={8} >

                    <form onSubmit={handleOnSubmit} style={{ backgroundColor: 'white', padding: '10px', borderRadius: '12px', marginTop: '30px' }}>
                        <TextField
                            required
                            label="Car Name"
                            sx={{ width: '85%', m: 1 }}

                            name="name"
                            onBlur={handleOnBlur}
                            color="secondary" focused
                            variant="filled" />
                        <TextField
                            required
                            label="description"
                            sx={{ width: '85%', m: 1 }}

                            name="desc"
                            onBlur={handleOnBlur}
                            color="secondary" focused
                            variant="filled" />
                        <TextField
                            required
                            label=" Price "
                            sx={{ width: "85%", m: 1 }}
                            onBlur={handleOnBlur}
                            name="price"
                            type="number"
                            color="secondary" focused
                            variant="filled" />
                        <TextField
                            required
                            label="Image URL "
                            color="secondary" focused
                            sx={{ width: "85%", m: 1 }}
                            onBlur={handleOnBlur}
                            name="img"
                            type="text"
                            variant="filled" />

                        <Button variant="contained" sx={{ width: "85%", my: 3, bgcolor: 'secondary.main' }} type="submit">ADD A NEW CAR</Button>

                    </form>

                </Grid>
                <Grid item xs={12} md={4} sx={{ color: 'white' }} >
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }} component="div">
                        New Car Image Link
                    </Typography>
                    <List>
                        https://i.ibb.co/3FD5qPX/mercedis3.png
                        https://i.ibb.co/tm06PH8/small.png
                        https://i.ibb.co/7RpVctY/rangeR1.png
                        https://i.ibb.co/XScDwqq/bugati1.png
                        https://i.ibb.co/TM8zwc3/ford1.png
                        https://i.ibb.co/VS89ZGH/mercedis2.png
                        https://i.ibb.co/RC2d8qf/bmw1.png
                        https://i.ibb.co/kKVLFQP/audi1.png
                        https://i.ibb.co/M6kSjdx/golden.png
                        https://i.ibb.co/M7GNSfQ/ferari.png
                        https://i.ibb.co/mS9p9Df/mercedes1.png
                        https://i.ibb.co/X2gznDm/lamborgini.png

                    </List>
                </Grid>

            </Grid>


        </Box>
    );
};

export default AddaCar;