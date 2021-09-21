import React from 'react'
import { Carousel } from 'react-bootstrap'


export const Home = () => {
  return (
    <>
      <h1>
        PLANT
      </h1>
      <div className="hero d-flex">
        <div>
          <img className="image-home" src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1627311177/keszthelyi-timi-9ND6fWtJj9U-unsplash_s9v7kw.jpg" />
        </div>
        <div className="hero-text one">
          <h4 className="text-header-one">Get Inspired!</h4>
          <p>House plant care, decor, & diys</p>
        </div>
      </div>
      <div className="hero d-flex">
        <div className="hero-text two">
          <h4 className="text-header-two">Keeping plants alive is harder than it looks on Instagram.</h4>
          <p>Become the plant parent you were always meant to be.</p>
          <p>Grow the indoor jungle you’ve always dreamed of.</p>
          <div className="quote">
            <p>Feel empowered.<br />Reconnect with nature.<br />Join the community.</p>
          </div>
        </div>
        <div>
          <img className="image-home" src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1626884058/milada-vigerova-n1Y2tKFvN1Y-unsplash_d4hvjr.jpg" />
        </div>
      </div>

      <Carousel>
        <Carousel.Item>
          <div className="d-flex carousel-hero">
            <img
              className="w-50 img-fluid"
              src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1627313178/photo-1607802065367-120dbcb2d919_p7kpyj.jpg"
              alt="First slide"
            />
            <div className="carousel-text">
              <p>Become a Plant Guru</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex carousel-hero">
            <img
              className="w-50 img-fluid"
              src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1626884317/kadarius-seegars-PhDeqpcemjQ-unsplash_zalzxl.jpg"
              alt="Second slide"
            />
            <div className="carousel-text">
              <p><a href="#">Share your great ideas!</a></p>
            </div>

          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex carousel-hero">
            <img
              className="w-50 img-fluid"
              src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1627313241/photo-1488353816557-87cd574cea04_khivkb.jpg"
              alt="Third slide"
            />
            <div className="carousel-text">
              <p>Dream Jungle</p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Home
