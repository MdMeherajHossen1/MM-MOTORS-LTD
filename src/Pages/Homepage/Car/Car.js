import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router';

const Car = ({ car }) => {
    const { name, img, desc, price, _id } = car;
    const history = useHistory()
    const handleBuyNow = id => {
        history.push(`/purchase/${id}`)
    }
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 3, mb: 3, color: 'white', bgcolor: '#3D2C8D' }}>
                <CardMedia
                    component="img"
                    sx={{ width: '100%', height: '230px' }}
                    image={img}
                    alt="Paella dish"
                />
                <CardContent>

                    <Typography variant="h5" sx={{ fontWeight: 'bold' }} component="div">
                        {name.toUpperCase()}
                    </Typography>

                    <Typography variant="body2" gutterBottom sx={{ textAlign: 'left' }}>
                        {desc.slice(0, 124)}

                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: '600', textAlign: 'justify' }} component="div">
                        Price:  {price}
                    </Typography>
                    <Button variant="contained" onClick={() => handleBuyNow(_id)} sx={{ bgcolor: '#1C0C5B', width: '100%', mb: 0 }}>Buy Now</Button>
                </CardContent>
            </Card>
        </Grid >
    );
};

export default Car;