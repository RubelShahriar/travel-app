import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    const {user, isLoading} = useAuth();
    if(isLoading){
        return <Spinner animation="border" variant="warning" />
    }
    return (
        <Route
            {...rest}
            render = {({location}) => user.displayName || user.email ? children : <Redirect
            to={{
                pathname: "/log-in",
                state: { from: location }
              }}
            ></Redirect>}>
            
        </Route>
    );
};

export default PrivateRoute;