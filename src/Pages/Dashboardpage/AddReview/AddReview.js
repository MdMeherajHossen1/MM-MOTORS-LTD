import React, { useState, useEffect } from 'react';
import { Button, Container, Grid, Typography, Alert } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

const AddReview = () => {
    const [reviews, setReviews] = useState({})
    const handleOnBlur = e => {

    }
    const handleOnSubmit = e => {

    }

    return (
        <Container>

            <form onSubmit={handleOnSubmit}>
                <TextField id="standard-basic"
                    label="Your Name"
                    sx={{ width: '75%', m: 1 }}
                    name="name"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <TextField id="standard-basic"
                    label="Your Email"
                    sx={{ width: '75%', m: 1 }}
                    name="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <TextField id="standard-basic"
                    label=" Password"
                    sx={{ width: "75%", m: 1 }}
                    onBlur={handleOnBlur}
                    name="password"
                    type="password"
                    variant="standard" />

                <TextField id="standard-basic"
                    label="Confirm password"
                    sx={{ width: "75%", m: 1 }}
                    onBlur={handleOnBlur}
                    name="password2"
                    type="password"
                    variant="standard" />
                <Button variant="contained" sx={{ width: "75%", my: 3 }} type="submit">Submit</Button>



            </form>


        </Container >
    );
};

export default AddReview;