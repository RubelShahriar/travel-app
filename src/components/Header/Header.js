import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const {user, logOut,signInWithGoogle} = useAuth();
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto vertical-align">
                    <Link className='nav-item' to='/home'>Home</Link>
                    <Link className='nav-item' to='/my-order'>My Orders</Link>
                    <Link className='nav-item' to='/add-package'>Add Packages</Link>
                    <Link className='nav-item' to='/manage-all-order'>Manage Orders</Link>
                    
                </Nav>
                <Navbar.Text className='nav-item'>
                    Signed in as: <a href="#login">{user.displayName}</a>
                </Navbar.Text>
                {
                    user.displayName ? 
                    <Button onClick={logOut} className='nav-item-color' variant="success">LogOut</Button> 
                    :
                    <Button onClick={signInWithGoogle} className='nav-item-color' variant="success">LogIn</Button>
                }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;