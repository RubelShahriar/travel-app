import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faMapMarkerAlt, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faFacebookF, faInstagram, faTwitter, faGoogle} from '@fortawesome/free-brands-svg-icons'
import logoFooter from '../images/logo-alt.980da429.svg';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <>
    <h2 style={{fontSize: '40px', margin: '40px 0'}}>Contact</h2>
    <div style={{background: '#F7F9F9'}}>
    <Container>
    <div className='footer'>
        <div className='logo'>
            <img src={logoFooter} alt=''></img>
            <span>TripFinder.</span>
            <p>When you travel, you meet new people, cultures, experience new things, embark on all sorts of adventures (good and bad), and perhaps even redefine your meaning of life. Because you are learning</p>
            <h4>Follow Us: </h4>
            <div className='icons'> 
            <FontAwesomeIcon icon={faFacebookF} className='icon'></FontAwesomeIcon>
            <FontAwesomeIcon icon={faInstagram} className='icon'></FontAwesomeIcon>
            <FontAwesomeIcon icon={faGoogle} className='icon'></FontAwesomeIcon>
            <FontAwesomeIcon icon={faTwitter} className='icon'></FontAwesomeIcon>
            </div>
        </div>
        <div className='departments'> 
            <h3>Support</h3>
            <ul>
                <li>About Us</li>
                <li>Destinations</li>
                <li>Our Blogs</li>
                <li>Contact Us </li>
                <li>Packages</li>
            </ul>
        </div>
        <div className='opening'> 
            <h3>Contact Us</h3>
            <div className='opening-flex'>
                <div>
                <FontAwesomeIcon icon={faMapMarkerAlt} className='inner'></FontAwesomeIcon>
                </div>
                <div>
                    <p>2752 Willison Street</p>
                    <p>Eagan, United State</p>
                </div>
            </div>
            <div className='opening-flex'>
                <div>
                <FontAwesomeIcon icon={faEnvelope} className='inner middle'></FontAwesomeIcon>
                </div>
                <div className='example'>
                    <p>info@example.com</p>
                    <p>support@example.com</p>
                </div>
            </div>
            <div className='opening-flex'>
                <div>
                <FontAwesomeIcon icon={faPhoneAlt} className='inner'></FontAwesomeIcon>
                </div>
                <div>
                    <p>+637957-374859</p>
                    <p>+638473-378362</p>
                </div>
            </div>
        </div>
        <div className='touch'>
            <h4>We live in</h4>
            <div><p>2130 Fulton Street San Diego CA 94117-1080 USA</p></div>
            <div><p>Coll Us Now!  +898 68679 575</p></div>
            <div><p>Do you have a Question? info@gmail.com</p></div>
            <div><p>All of we are about to serve you better. </p></div>
        </div>
        </div>
    </Container>
    </div>
    </>
    );
};

export default Footer;