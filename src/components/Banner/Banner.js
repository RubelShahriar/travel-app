import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://gotravel.qodeinteractive.com/wp-content/uploads/2016/04/slide-2.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>The Hotel and Resorts</h3>
      <p>Make Your Life Better and Bright! You Must Trip With Us!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://gotravel.qodeinteractive.com/wp-content/uploads/2016/04/slide-2.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>The Hotel and Resorts</h3>
      <p>Make Your Life Better and Bright! You Must Trip With Us!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://gotravel.qodeinteractive.com/wp-content/uploads/2016/04/slide-2.jpg"
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