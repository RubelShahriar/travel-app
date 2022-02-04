import React from 'react';
import { Carousel } from 'react-bootstrap';
import slideOwo from '../images/pexels-photo-1662549.jpeg'
import slideTwo from '../images/pexels-photo-1006321.jpeg'
import slideThree from '../images/pexels-photo-338504.jpeg'
import './Banner.css'
const Banner = () => {
    return (
        <Carousel className='banner'>
  <Carousel.Item>
    <img
      style={{height: '95vh'}}
      className="d-block w-100"
      src={slideTwo}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>The Hotel and Resorts</h3>
      <p>Make Your Life Better and Bright! You Must Trip With Us!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      style={{height: '95vh'}}
      className="d-block w-100"
      src={slideOwo}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>The Hotel and Resorts</h3>
      <p>Make Your Life Better and Bright! You Must Trip With Us!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      style={{height: '95vh'}}
      className="d-block w-100"
      src={slideThree}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>The Hotel and Resorts</h3>
      <p>Make Your Life Better and Bright! You Must Trip With Us!</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
};

export default Banner;