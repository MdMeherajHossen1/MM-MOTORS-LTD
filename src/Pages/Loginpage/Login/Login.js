import { Button, Container, Grid, Typography, Alert } from '@mui/material';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import {
    Link, useHistory,
    useLocation
} from 'react-router-dom';
import loginI from '../../../images/login.png'
import useAuth from '../../../hooks/useAuth'
const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { user, handleLogin, error, handleGoogleSignIn } = useAuth()
    const history = useHistory();
    const location = useLocation();
    const handleOnChange = e => {
        const feild = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }

        newLoginData[feild] = value;

        setLoginData(newLoginData)
    }
    const handleOnSubmit = e => {
        handleLogin(loginData.email, loginData.password, location, history)
        e.preventDefault()
    }
    const googleSignInBtn = () => {
        handleGoogleSignIn(location, history)
    }
    return (
        <Container >


            <Grid container spacing={2}>

                <Grid xs={12} md={6} sx={{ mt: 5 }}>
                    {user.email ? <Alert severity="success">successfuly Login </Alert> : <Typography variant="h4" >
                        Login
                    </Typography>}
                    {error && <Alert severity="error">{error}</Alert>}


                    <form onSubmit={handleOnSubmit}>
                        <TextField id="standard-basic"
                            label="Your Email"
                            sx={{ width: '75%', m: 1 }}
                            name="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField id="standard-basic"
                            label="Your Password"
                            sx={{ width: "75%", m: 1 }}
                            onChange={handleOnChange}
                            name="password"
                            type="password"
                            variant="standard" />
                        <Button variant="contained" sx={{ width: "75%", my: 3, bgcolor: 'secondary.main' }} type="submit">Login</Button>
                        <Link style={{ textDecoration: 'none' }} to="/register"> <Button variant="text"> New user? Please Register</Button></Link>
                        <p>----------------------------</p>
                        <Button variant="contained" sx={{ width: "75%", my: 3, bgcolor: 'secondary.main' }} onClick={googleSignInBtn} >Google SignIn</Button>
                    </form>

                </Grid>


                <Grid xs={12} md={6} sx={{ mt: 5 }}>
                    <img src={loginI} style={{ width: '100%' }} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;