import React from 'react';
import image from '../images/images.png';
import './Footer.css';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
    <div className='background'>
    <Container>
    <div className='footer'>
    <div className='logo'>
        <img src={image} alt=''></img>
        <p>Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for your family healthcare</p>
        <div className='icons'>
        </div>
    </div>
    <div className='departments'> 
        <h3>Departments</h3>
        <ul>
            <li>Dental Services</li>
            <li>Emergency Medicine</li>
            <li>Ophthalmology</li>
            <li>Orthopedic Surgery</li>
            <li>Neurosurgery</li>
        </ul>
    </div>
    <div className='opening'> 
        <h3>Opening Hours</h3>
        <div className='opening-flex'>
            <div>Mon-Tues:</div>
            <div>6:00-10:00</div>
        </div>
        <div className='opening-flex'>
            <div>Wed-Thurs:</div>
            <div>6:00-10:00</div>
        </div>
        <div className='opening-flex'>
            <div>Sat-Sun:</div>
            <div>6:00-10:00</div>
        </div>
        <div className='opening-flex'>
            <div>Friday</div>
            <div>Emergency Only</div>
        </div>
    </div>
    <div className='touch'>
        <h3>Get In Touch</h3>
        <div><p>2130 Fulton Street San Diego CA 94117-1080 USA</p></div>
        <div><p>Coll Us Now!  +898 68679 575</p></div>
        <div><p>Do you have a Question? info@gmail.com</p></div>
    </div>
</div>
</Container>
</div>
    );
};

export default Footer;