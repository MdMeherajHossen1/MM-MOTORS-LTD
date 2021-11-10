import { Button, Container, Grid, Typography, Alert } from '@mui/material';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router'
import useAuth from '../../../hooks/useAuth';
import loginI from '../../../images/login.png'
import CircularProgress from '@mui/material/CircularProgress';


const Register = () => {
    const [loginData, setLoginData] = useState({})
    const { handleRegister, loading, error, user, handleGoogleSignIn } = useAuth()
    const history = useHistory()
    const location = useLocation()
    const handleOnChange = e => {
        const feild = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[feild] = value;
        console.log(feild, value, newLoginData)
        setLoginData(newLoginData)
    }
    const handleOnSubmit = e => {
        if (loginData?.password !== loginData?.password2) {
            alert('Password is not match. Plz try again')
        }
        handleRegister(loginData?.email, loginData?.password, loginData?.name, history)
        e.preventDefault()
    }
    const googleSignInBtn = () => {
        handleGoogleSignIn(location, history)
    }
    return (
        <Container >
            <Grid container spacing={2}>
                <Grid xs={12} md={6} sx={{ mt: 5 }}>
                    <Typography variant="h4" >
                        Registration Here
                    </Typography>
                    {error && <Alert severity="error">{error}</Alert>}
                    {user.email && <Alert severity="success">successfuly created user </Alert>}
                    {
                        loading ? <CircularProgress color="secondary" />

                            :
                            <form onSubmit={handleOnSubmit}>
                                <TextField id="standard-basic"
                                    label="Your Name"
                                    sx={{ width: '75%', m: 1 }}
                                    name="name"
                                    onBlur={handleOnChange}
                                    variant="standard" />
                                <TextField id="standard-basic"
                                    label="Your Email"
                                    sx={{ width: '75%', m: 1 }}
                                    name="email"
                                    onBlur={handleOnChange}
                                    variant="standard" />
                                <TextField id="standard-basic"
                                    label=" Password"
                                    sx={{ width: "75%", m: 1 }}
                                    onBlur={handleOnChange}
                                    name="password"
                                    type="password"
                                    variant="standard" />

                                <TextField id="standard-basic"
                                    label="Confirm password"
                                    sx={{ width: "75%", m: 1 }}
                                    onBlur={handleOnChange}
                                    name="password2"
                                    type="password"
                                    variant="standard" />
                                <Button variant="contained" sx={{ width: "75%", my: 3 }} type="submit">Submit</Button>
                                <Link style={{ textDecoration: 'none' }} to="/login"> <Button variant="text"> Already Register ? Please Login</Button></Link>
                                <p>------------------------</p>
                                <Button variant="contained" sx={{ width: "75%", my: 3 }} onClick={googleSignInBtn}>Google SignIn</Button>


                            </form>
                    }

                </Grid>


                <Grid xs={12} md={6} sx={{ mt: 5 }}>
                    <img src={loginI} style={{ width: '100%' }} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;