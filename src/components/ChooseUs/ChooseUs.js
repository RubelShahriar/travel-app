import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faHandshake, faImages, faSmile} from '@fortawesome/free-regular-svg-icons'
import './ChooseUs.css';


const ChooseUs = () => {
    return (
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
    );
};

export default ChooseUs;