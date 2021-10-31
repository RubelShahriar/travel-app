import React from 'react';
import './Articles.css';
import image from '../images/blog-01.jpeg';
import imageTwo from '../images/blog-02.jpeg';
import imageThree from '../images/blog-03.jpeg';
import imageFour from '../images/blog-04.jpeg';
import { Container } from 'react-bootstrap';

const Articles = () => {
    return (
        <Container>
            <div className='articles'>
            <h2>ARTICLES & NEWS</h2>
            <div className='flex'>
                <div className='item'>
                    <div className='image'>
                        <img src={image} alt=''></img>
                    </div>
                    <div className='text first'>
                        <h4>Our News</h4>
                        <h3>Travel Events</h3>
                        <p>Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut et lobortis.</p>
                        <button>Read more</button>
                    </div>
                </div>
                <div className='item'>
                    <div className='image'>
                        <img src={imageFour} alt=''></img>
                    </div>
                    <div className='text text-one'>
                        <h4>Our News</h4>
                        <h3>Travel Events</h3>
                        <p>Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut et lobortis.</p>
                        <button>Read more</button>
                    </div>
                </div>
                <div className='item'>
                    <div className='text text-two'>
                        <h4>Our News</h4>
                        <h3>Travel Events</h3>
                        <p>Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut et lobortis.</p>
                        <button>Read more</button>
                    </div>
                    <div className='image'>
                        <img src={imageThree} alt=''></img>
                    </div>
                </div>
                <div className='item'>
                    <div className='text text-one text-three'>
                        <h4>Our News</h4>
                        <h3>Travel Events</h3>
                        <p>Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut et lobortis.</p>
                        <button>Read more</button>
                    </div>
                    <div className='image'>
                        <img src={imageTwo} alt=''></img>
                    </div>
                </div>
            </div>
        </div>
        </Container>
    );
};

export default Articles;