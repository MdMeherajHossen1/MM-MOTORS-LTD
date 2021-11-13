import React, { useState } from 'react';
import { Button, Grid, Typography, Alert, Box, Select, MenuItem } from '@mui/material';
import TextField from '@mui/material/TextField';
import useAuth from '../../../hooks/useAuth';
import { useHistory } from 'react-router'


const AddReview = () => {
    const [reviews, setReviews] = useState(null)
    const [success, setSuccess] = useState(false)
    const history = useHistory()
    const { user } = useAuth()
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReview = { ...reviews }
        newReview[field] = value;
        setReviews(newReview)
    }
    const handleOnSubmit = e => {
        const reviewInfo = {
            name: reviews?.name || user.displayName,
            desc: reviews?.desc,
            rating: reviews?.rating,
            img: user.photoURL || 'https://i.ibb.co/1vzWDPj/profile-Image.png'
        };

        if (reviews === null) {
            alert('make a reivew first')
        }
        else {
            fetch('https://mysterious-atoll-03905.herokuapp.com/review', {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(reviewInfo)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        alert('Congratulation, Your Reviews has successfuly done.')
                        setSuccess(true)
                        setReviews(null)
                        history.push('/')
                    }
                })
        }
        console.log(reviews)

        e.preventDefault();
    }

    return (
        <Box sx={{ flexGrow: 1, bgcolor: '#1C0C5B', p: 3 }} >

            <Typography variant="h4" sx={{ mt: 3, color: 'white' }} >
                Make a Review on Our Services
            </Typography>
            {success && <Alert severity="success">successfuly Added your Review </Alert>}
            <Grid container spacing={{ xs: 2, md: 3 }} sx={{ my: 3, px: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>

                <Grid item xs={12} md={8} >

                    <form onSubmit={handleOnSubmit} style={{ backgroundColor: 'white', padding: '10px', borderRadius: '12px', marginTop: '30px' }}>
                        <TextField
                            required
                            label="Your Name"
                            sx={{ width: '75%', m: 1 }}
                            defaultValue={user.displayName}
                            name="name"
                            onBlur={handleOnBlur}
                            color="secondary" focused
                            variant="filled" />
                        <TextField
                            required
                            label="description"
                            sx={{ width: '75%', m: 1 }}

                            name="desc"
                            onBlur={handleOnBlur}
                            color="secondary" focused
                            variant="filled" />


                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="rating"
                            label="Give Rating"
                            sx={{ width: "75%", m: 1 }}
                            onChange={handleOnBlur}
                            required
                        >
                            <MenuItem value={1}>1 Star</MenuItem>
                            <MenuItem value={2}>2 Star</MenuItem>
                            <MenuItem value={3}>3 Star</MenuItem>
                            <MenuItem value={4}>4 Star</MenuItem>
                            <MenuItem value={5}>5 Star</MenuItem>
                        </Select>

                        <Button variant="contained" sx={{ width: "75%", my: 3, bgcolor: 'secondary.main' }} type="submit">ADD A REVIEW</Button>

                    </form>

                </Grid>


            </Grid>


        </Box>
    );
};

export default AddReview;