import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const AllCar = ({ car, handleDelete }) => {
    const { name, img, desc, price, _id } = car;

    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, maxHeight: 450, border: 0, boxShadow: 3, mb: 3, color: 'white', bgcolor: '#3D2C8D' }}>
                <CardMedia
                    component="img"
                    sx={{ width: '100%', height: '230px' }}
                    image={img}
                    alt="Paella dish"
                />
                <CardContent>

                    <Typography variant="p" sx={{ fontWeight: 'bold' }} component="div">
                        {name.toUpperCase()}
                    </Typography>

                    <Typography variant="body2" gutterBottom sx={{ textAlign: 'left' }}>
                        {desc.slice(0, 124)}

                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: '600', textAlign: 'justify' }} component="div">
                        Price:  {price}
                    </Typography>
                    <Button variant="contained" onClick={() => handleDelete(_id)} sx={{ bgcolor: '#1C0C5B', width: '100%', mb: 0 }}>Delete This Car</Button>
                </CardContent>
            </Card>
        </Grid >
    );
};

export default AllCar;