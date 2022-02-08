import React from 'react';
import { Button, Container} from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import {faGooglePlusSquare, faGithubSquare} from '@fortawesome/free-brands-svg-icons'
import useAuth from '../../hooks/useAuth';
import image from '../images/log.png'
import './LogIn.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        <Container>
            <div className='login-travel'>
                <div></div>
                <div style={{ background: '#f1f1f1', borderRadius: '10px', }}>
                    <img src={image} alt='' style={{width: '100%', height: '300px'}}/>
                    <h3 className='mb-5'>Please Login</h3>
                    <Button className='w-75 mb-3 d-flex justify-content-around mx-auto' onClick={handleGoogleLogIn} variant="primary">
                        <FontAwesomeIcon icon={faGooglePlusSquare} className='fs-1'/>
                        <p className='my-auto fs-5 '>LogIn With Google</p>
                    </Button>
                    <Button className='w-75 d-flex justify-content-around mx-auto' onClick={handleGithubLogIn} variant="primary">
                        <FontAwesomeIcon icon={faGithubSquare} className='fs-1'/>
                        <p className='my-auto fs-5 '>LogIn with GitHub</p>
                    </Button>
                </div>
                <div></div>
            </div>
        </Container>
    );
};

export default LogIn;