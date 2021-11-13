import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useAuth from '../../../hooks/useAuth'
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Pay from '../Pay/Pay'
import Myorders from '../MyOrders/Myorders';
import MakeaAdmin from '../MakeaAdmin/MakeaAdmin';
import AddaCar from '../AddACar/AddaCar';
import AllOrders from '../AllOrders/AllOrders';
import AddReview from '../AddReview/AddReview';
import ManageCars from '../ManageCars/ManageCars';
import AdminRoute from '../../Sharedpage/AdminRoute/AdminRoute';

const drawerWidth = 200;

function Dashboard(props) {
    let { path, url } = useRouteMatch();
    const { user, handleSignOut, admin } = useAuth()


    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div >
            <Toolbar />
            <Divider />
            <List sx={{ bgcolor: "#1C0C5B" }} >
                <Link style={{ textDecoration: 'none', color: 'white' }} to="/allcars"> <Button variant="contained" sx={{ bgcolor: 'secondary.main', width: '90%', mb: 2 }}>All Cars</Button></Link>

                <Link style={{ textDecoration: 'none' }} to={`${url}`}> <Button color="inherit">Dashboard</Button></Link>
                {admin ? <Box> <Link style={{ textDecoration: 'none' }} to={`${url}/makeadmin`}><Button variant="contained" sx={{ bgcolor: 'secondary.main', width: '90%', mb: 2 }}>Make Admin</Button></Link>
                    <Link style={{ textDecoration: 'none' }} to={`${url}/addcar`}><Button variant="contained" sx={{ bgcolor: 'secondary.main', width: '90%', mb: 2 }}>Add A Car</Button></Link>
                    <Link style={{ textDecoration: 'none' }} to={`${url}/allorder`}><Button variant="contained" sx={{ bgcolor: 'secondary.main', width: '90%', mb: 2 }}>ALL ORDERS</Button></Link>
                    <Link style={{ textDecoration: 'none' }} to={`${url}/allcars`}><Button variant="contained" sx={{ bgcolor: 'secondary.main', width: '90%', mb: 2 }}>Manage ALL Cars</Button></Link>
                    <Button variant="contained" onClick={handleSignOut} sx={{ bgcolor: 'secondary.main', width: '90%', mb: 2 }}>Log Out</Button>
                </Box>

                    :
                    <Box>
                        <Link style={{ textDecoration: 'none' }} to={`${url}/pay`}><Button variant="contained" sx={{ bgcolor: 'secondary.main', width: '90%', mb: 2 }}>Pay</Button></Link>
                        <Link style={{ textDecoration: 'none' }} to={`${url}/myorders`}><Button variant="contained" sx={{ bgcolor: 'secondary.main', width: '90%', mb: 2 }}>My Orders</Button></Link>
                        <Link style={{ textDecoration: 'none' }} to={`${url}/review`}><Button variant="contained" sx={{ bgcolor: 'secondary.main', width: '90%', mb: 2 }}>Add a Review</Button></Link>
                        <Button variant="contained" onClick={handleSignOut} sx={{ bgcolor: 'secondary.main', width: '90%', mb: 2 }}>Log Out</Button>
                    </Box>
                }

            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }} >
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar sx={{ bgcolor: "#1C0C5B" }} >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, bgcolor: '#1C0C5B', flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >

                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >

                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/review`}>
                        <AddReview></AddReview>
                    </Route>
                    <Route path={`${path}/myorders`}>
                        <Myorders></Myorders>
                    </Route>
                    {
                        admin && <Box>
                            <AdminRoute path={`${path}/makeadmin`}>
                                <MakeaAdmin></MakeaAdmin>
                            </AdminRoute>
                            <AdminRoute path={`${path}/addcar`}>
                                <AddaCar></AddaCar>
                            </AdminRoute>
                            <AdminRoute path={`${path}/allorder`}>
                                <AllOrders></AllOrders>
                            </AdminRoute>
                            <AdminRoute path={`${path}/allcars`}>
                                <ManageCars></ManageCars>
                            </AdminRoute>
                        </Box>
                    }
                    {/* <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    
                    {admin && <Box>
                        <AdminRoute path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                        <AdminRoute path={`${path}/addDoctor`}>
                            <AddDoctors></AddDoctors>
                        </AdminRoute>
                    </Box>} */}
                </Switch>


            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
