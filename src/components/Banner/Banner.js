import React from 'react';
import { Carousel } from 'react-bootstrap';
import slideTwo from '../images/slide-2.jpeg'
const Banner = () => {
    return (
        <Carousel>
  <Carousel.Item>
    <img
      style={{height: '70vh'}}
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
      style={{height: '70vh'}}
      className="d-block w-100"
      src={slideTwo}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>The Hotel and Resorts</h3>
      <p>Make Your Life Better and Bright! You Must Trip With Us!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      style={{height: '70vh'}}
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