import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth';


const Navigation = () => {
    const { user, handleSignOut } = useAuth()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ bgcolor: "#1C0C5B", color: 'white' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
                        MM MOTORS LTD
                    </Typography>
                    <Link to="/allcars"> <Button color="inherit">All Cars</Button></Link>
                    {
                        user.email && <Link to="/dashboard" style={{ textDecoration: 'none' }}> <Button color="inherit">Dashboard</Button></Link>
                    }
                    <Link to="/purchase/:id" style={{ textDecoration: 'none' }}> <Button color="inherit">Purchase</Button></Link>
                    {
                        user?.email ? <Link to="/login" style={{ textDecoration: 'none' }}> <Button onClick={handleSignOut} color="inherit">Log out</Button></Link> : <Link to="/login"> <Button color="inherit">Login</Button></Link>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;