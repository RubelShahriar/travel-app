import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
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
                    <Link className='nav-item' to='/manage-user'>Manage Users</Link>
                    
                </Nav>
                <Navbar.Text className='nav-item'>
                    Signed in as: <a href="#login">Mark Otto</a>
                </Navbar.Text>
                <Button className='nav-item-color' variant="success">LOGIN</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;