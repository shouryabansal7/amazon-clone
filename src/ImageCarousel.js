import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import "./ImageCarousel.css";

function ImageCarousel(props) {
  return (
    <div className="carousel">
      <Carousel>
        <Carousel.Item interval={1500} className="image">
          <img
            className="d-block w-100"
            src="https://m.media-amazon.com/images/I/71hTJcekCcL._SX3000_.jpg"
            alt="Image One"
          />
        </Carousel.Item>
        <Carousel.Item interval={1500} className="image">
          <img
            className="d-block w-100"
            src="https://m.media-amazon.com/images/I/61nqIIcfQyL._SX1500_.jpg"
            alt="Image Two"
          />
        </Carousel.Item>
        <Carousel.Item interval={1500} className="image">
          <img
            className="d-block w-100"
            src="https://m.media-amazon.com/images/I/71OtykM5UCL._SX3000_.jpg"
            alt="Image Two"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ImageCarousel;
