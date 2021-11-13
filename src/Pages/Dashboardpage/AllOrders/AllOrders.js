import React, { useState, useEffect } from 'react';
import useAuth from '../../../hooks/useAuth'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material'
import Orders from '../MyOrders/Orders/Orders'
const AllOrders = () => {
    const [allOrders, setAllOrders] = useState([])
    const [deleted, setDeleted] = useState(null)
    const [loading, setLoading] = useState(true)
    const { user } = useAuth()
    useEffect(() => {
        fetch('https://mysterious-atoll-03905.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                setAllOrders(data)
                setLoading(false)
            })
    }, [deleted])

    const handleDelete = id => {
        const confirmMessage = window.confirm("Are you sure ? You want to Cencel your Order?")
        if (confirmMessage) {
            fetch(`https://mysterious-atoll-03905.herokuapp.com/orders/${id}`, { method: "DELETE" })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Successfuly Cancel Your Order')
                        const remaining = allOrders.filter(od => od._id !== id)
                        setAllOrders(remaining)
                        setDeleted(true)
                    }
                    else {
                        setDeleted(false)
                    }
                })
        }
    }
    return (
        <Box sx={{ flexGrow: 1, bgcolor: '#1C0C5B' }}>

            <Container>
                <Typography sx={{ fontWeight: 500, color: 'info.main', m: 2 }} variant="h5" component="div">
                    ALL Orders of User
                </Typography>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        allOrders?.map(orders => <Orders
                            key={orders._id}
                            orders={orders}
                            handleDelete={handleDelete}
                        ></Orders>)
                    }
                </Grid>
            </Container>

        </Box>
    );
};

export default AllOrders;