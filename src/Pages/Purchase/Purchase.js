import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import Navigation from '../Sharedpage/Navigation/Navigation';
import Footer from '../Sharedpage/Footer/Footer'


const Purchase = () => {
    const [car, setCar] = useState(null)
    const [order, setOrder] = useState({})
    const { id } = useParams()
    const history = useHistory()
    const { user, error, loading } = useAuth()

    // data fetching from db by id 
    useEffect(() => {
        fetch(`https://mysterious-atoll-03905.herokuapp.com/cars?id=${id}`)
            .then(res => res.json())
            .then(data => {
                if (data.length) {
                    setCar(data)
                }
            })
    }, [])


    const handleOnBlur = e => {
        const feild = e.target.name;
        const value = e.target.value;
        const orderData = { ...order }
        orderData[feild] = value;
        setOrder(orderData)
    }
    //  submit order to the database
    const handleOnSubmit = e => {
        if (car === null) {
            alert('You have to select a Car first')
        }
        else {
            const orderInfo = {
                name: order?.name || user?.displayName,
                email: order?.email || user?.email,
                address: order?.address,
                phone: order?.phone,
                date: order?.date,
                car: car?.[0]
            }

            fetch('https://mysterious-atoll-03905.herokuapp.com/orders', {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(orderInfo)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        alert('Congratulation, Your orders has successfuly done.')
                        setCar(null)
                        setOrder({})
                        history.push('/')
                    }
                })
        }


        e.preventDefault()
    }
    return (
        <Box sx={{ flexGrow: 1, bgcolor: '#1C0C5B' }}>
            <Navigation></Navigation>
            <Typography variant="h4" sx={{ mt: 3, color: 'white' }} >
                Place Your Order here
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} sx={{ my: 3, px: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>

                <Grid item xs={12} md={6} >

                    {error && <Alert severity="error">{error}</Alert>}

                    {
                        loading ? <CircularProgress color="secondary" />

                            :
                            <form onSubmit={handleOnSubmit} style={{ backgroundColor: 'white', padding: '10px', borderRadius: '12px', marginTop: '30px' }}>
                                <TextField
                                    required
                                    label="Your Name"
                                    sx={{ width: '85%', m: 1 }}
                                    defaultValue={user.displayName}
                                    name="name"
                                    onBlur={handleOnBlur}
                                    color="secondary" focused
                                    variant="filled" />
                                <TextField
                                    required
                                    label="Your Email"
                                    sx={{ width: '85%', m: 1 }}
                                    defaultValue={user.email}
                                    name="email"
                                    onBlur={handleOnBlur}
                                    color="secondary" focused
                                    variant="filled" />
                                <TextField
                                    required
                                    label=" number"
                                    sx={{ width: "85%", m: 1 }}
                                    onBlur={handleOnBlur}
                                    name="phone"
                                    type="number"
                                    color="secondary" focused
                                    variant="filled" />
                                <TextField
                                    required
                                    color="secondary" focused
                                    sx={{ width: "85%", m: 1 }}
                                    onBlur={handleOnBlur}
                                    name="date"
                                    type="date"
                                    variant="filled" />

                                <TextField
                                    required
                                    label="address"
                                    sx={{ width: "85%", m: 1 }}
                                    onBlur={handleOnBlur}
                                    name="address"
                                    type="text"
                                    color="secondary" focused
                                    variant="filled" />

                                <Button variant="contained" sx={{ width: "85%", my: 3, bgcolor: 'secondary.main' }} type="submit">Submit</Button>




                            </form>
                    }
                </Grid>

                <Grid item xs={12} md={6}>
                    {car === null ? <Typography variant="h6" gutterBottom sx={{ fontWeight: '600', textAlign: 'center', color: 'white' }} component="div">
                        You are not seleted any Car yet!!! <br />
                        PLz checkout Home or All Cars page
                    </Typography>
                        :
                        <Card sx={{ minWidth: 275, border: 0, boxShadow: 3, my: 3, color: 'white', bgcolor: '#3D2C8D' }}>
                            <CardMedia
                                component="img"
                                sx={{ width: '100%' }}
                                image={car[0]?.img}
                                alt=""
                            />
                            <CardContent>

                                <Typography variant="h5" sx={{ fontWeight: 'bold' }} component="div">
                                    {car[0]?.name.toUpperCase()}
                                </Typography>

                                <Typography variant="body2" gutterBottom sx={{ textAlign: 'left' }}>
                                    {car[0]?.desc}

                                </Typography>
                                <Typography variant="h6" gutterBottom sx={{ fontWeight: '600', textAlign: 'justify' }} component="div">
                                    Price:  {car[0]?.price}
                                </Typography>

                            </CardContent>
                        </Card>
                    }
                </Grid>

            </Grid>
            <Footer></Footer>
        </Box>
    );
};

export default Purchase;