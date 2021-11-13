import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Orders = ({ orders, handleDelete }) => {
    const { name, img, desc, price } = orders?.car;
    const { phone, address, date, _id } = orders;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, maxHeight: 500, border: 0, boxShadow: 3, mb: 3, color: 'white', bgcolor: '#3D2C8D' }}>
                <CardMedia
                    component="img"
                    sx={{ width: '100%', height: '230px' }}
                    image={img}
                    alt="Paella dish"
                />
                <CardContent>

                    <Typography variant="h6" sx={{ fontWeight: 'bold' }} component="div">
                        {name}
                    </Typography>


                    <Typography variant="p" component="div" gutterBottom sx={{ textAlign: 'left' }}>
                        PHONE:  {phone}
                    </Typography>

                    <Typography variant="body2" component="div" gutterBottom sx={{ textAlign: 'left' }}>
                        ADDRESS:  {address || 'DOHA, QATAR'}
                    </Typography>
                    <Typography variant="p" gutterBottom sx={{ fontWeight: '600', textAlign: 'justify' }} component="div">
                        PRICE:  {price}
                    </Typography>
                    <Typography variant="p" gutterBottom sx={{ fontWeight: '600', textAlign: 'justify' }} component="div">
                        ORDER'S DATE: {date}
                    </Typography>
                    <Button variant="contained" onClick={() => handleDelete(_id)} sx={{ bgcolor: '#1C0C5B', width: '100%' }}>Cencel Your Order</Button>
                </CardContent>
            </Card>
        </Grid >
    );
};

export default Orders;