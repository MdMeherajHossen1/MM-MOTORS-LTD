import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Review from '../Review/Review';
const Reviews = () => {
    const [review, setReview] = useState([])
    useEffect(() => {
        fetch('https://mysterious-atoll-03905.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <Box sx={{ flexGrow: 1, bgcolor: '#1C0C5B' }}>
            <Container>

                <Typography sx={{ fontWeight: 500, mb: 3, color: 'white' }} variant="h3" component="div">
                    Clients Say About us
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        review?.map(rev => <Review
                            key={rev._id}
                            rev={rev}
                        ></Review>)
                    }
                </Grid>
            </Container>
        </Box >
    );
};

export default Reviews;