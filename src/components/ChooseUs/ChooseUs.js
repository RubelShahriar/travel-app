import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faHandshake, faImages, faSmile} from '@fortawesome/free-regular-svg-icons'
import './ChooseUs.css';
import { Container } from 'react-bootstrap';
import cover from '../images/travel-template.jpg'


const ChooseUs = () => {
    return (
        <div>
            <div style={{marginTop: '50px', position: 'relative', height: '200px'}}>
                <img style={{height: '100%', width: '100%'}} src={cover} alt=''/>
                <div className='position-absolute top-0 left-0 h-100 w-100 d-flex justify-content-center align-items-center' style={{background: 'rgba(0, 0, 0, .2'}}>
                    <p style={{color: '#ECF0F1 ', fontSize: '40px',}}>Lets Go!</p>
                </div>
            </div>
            <Container>
            <div className='choose'>
            <h2>Why You Are Travel With Tourx</h2>
            <div className='flex'>
                <div className='item'>
                    <FontAwesomeIcon icon={faHandshake} className='icon'></FontAwesomeIcon>
                    <p>100% trusted travel agency</p>
                </div>
                <div className='item'>
                    <FontAwesomeIcon icon={faUser} className='icon'></FontAwesomeIcon>
                    <p>2000+ Our worldwide guide</p>
                </div>
                <div className='item'>
                    <FontAwesomeIcon icon={faImages} className='icon'></FontAwesomeIcon>
                    <p>10+ year of travel experience</p>
                </div>
                <div className='item'>
                    <FontAwesomeIcon icon={faSmile} className='icon'></FontAwesomeIcon>
                    <p>90% of our traveller happy</p>
                </div>
            </div>
        </div>
        </Container>
        </div>
    );
};

export default ChooseUs;