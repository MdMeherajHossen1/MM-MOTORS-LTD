import React from 'react';
import { CircularProgress } from '@mui/material';
import useAuth from '../../../hooks/useAuth'
import { Route, Redirect } from 'react-router-dom'
const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth()
    if (loading) { return <CircularProgress /> }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        >

        </Route>
    );
};

export default PrivateRoute;