import React from 'react';
import { Grid, Paper, Typography, Rating } from '@mui/material';

import useAuth from '../../../hooks/useAuth';
const Review = ({ rev }) => {
    const { name, desc, rating, img } = rev;
    const { user } = useAuth()
    return (
        <Grid item xs={12} md={4} sx={{ mb: 5 }}>
            <Paper elevation={3} sx={{ p: 2, height: '220px' }} style={{ backgroundColor: 'lightblue' }}>
                <img src={img} style={{ width: '80px', borderRadius: '40px', marginTop: '-50px' }} alt="" />
                <Typography variant="p" gutterBottom component="div">
                    {name || user.displayName}
                </Typography>
                <Rating name="read-only" value={rating} readOnly />
                <Typography variant="p" gutterBottom component="div">
                    {desc?.slice(0, 130)}
                </Typography>

            </Paper>
        </Grid>
    );
};

export default Review;