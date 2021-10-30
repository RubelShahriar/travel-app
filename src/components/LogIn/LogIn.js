import React from 'react';
import { Button} from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const LogIn = () => {
    const location = useLocation();
    const {user, signInWithGoogle, signInWithGitHub} = useAuth();
    console.log(user);
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const handleGoogleLogIn = () => {
        signInWithGoogle()
        .then(result => {
            console.log(result.user);
            history.push(redirect_uri);
        })
    }
    return (
        <div>
              <Button onClick={handleGoogleLogIn} variant="warning">login</Button>
              <Button onClick={signInWithGitHub} variant="warning">github login</Button>
        </div>
    );
};

export default LogIn;