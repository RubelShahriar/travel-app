import React from 'react';
import { Carousel } from 'react-bootstrap';
import slideOne from '../images/travel5.jpg'
import slideThree from '../images/travel3.jpg'
import slideTwo from '../images/travel7.jpg'
import './Banner.css'
const Banner = () => {
    return (
        <Carousel className='banner'>
  <Carousel.Item>
    <img
      style={{height: '95vh'}}
      className="d-block w-100"
      src={slideOne}
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
      src={slideThree}
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
      src={slideTwo}
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