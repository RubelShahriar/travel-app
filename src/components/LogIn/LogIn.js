import React from 'react';
import { Button} from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './LogIn.css';

const LogIn = () => {
    const location = useLocation();
    const {signInWithGoogle, signInWithGitHub} = useAuth();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const handleGoogleLogIn = () => {
        signInWithGoogle()
        .then(result => {
            console.log(result.user);
            history.push(redirect_uri);
        })
    }
    const handleGithubLogIn = () => {
        signInWithGitHub()
        .then(result => {
            console.log(result.user);
            history.push(redirect_uri);
        })
    }
    return (
        <div className='login'>
            <h4>Please LogIn</h4>
              <Button className='button' onClick={handleGoogleLogIn} variant="warning">LogIn With Google</Button>
              <Button className='button' onClick={handleGithubLogIn} variant="warning">LogIn With GitHub</Button>
        </div>
    );
};

export default LogIn;