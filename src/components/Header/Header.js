import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../images/logo-alt.980da429.svg';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const {user, logOut,signInWithGoogle} = useAuth();
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt=''></img>
                    <span className='fs-4 ms-2' style={{color: 'teal'}}>TripFinder.</span> 
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto d-flex align-items-center vertical-align">
                    <Link className='nav-item' to='/home'>Home</Link>
                    <Link className='nav-item' to='/my-order'>My Orders</Link>
                    <Link className='nav-item' to='/add-package'>Add Packages</Link>
                    <Link className='nav-item' to='/manage-all-order'>Manage Orders</Link>
                <Navbar.Text className='nav-item'>
                    Signed in as: <a href="#." className='text-decoration-none'>{user.displayName}</a>
                </Navbar.Text>
                {
                    user.displayName || user.email ? 
                    <Button onClick={logOut} className='bg-warning d-inline ms-2 fs-6 border-0' variant="success">LogOut</Button> 
                    :
                    <Button onClick={signInWithGoogle} className='bg-warning d-inline ms-2 fs-6 border-0' variant="success">LogIn</Button>
                }
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;