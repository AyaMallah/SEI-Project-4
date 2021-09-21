import React from 'react'
import { Card } from 'react-bootstrap'

const About = () => {
  return (
    <>
      <h1>About Me</h1>
      <div className="about-hero">
        <div className="about-text">
          <h4>Hey there, green thumb...</h4>
          <p>
            A few years ago I started adding greenery to my environment. I knew that the benefits of indoor plants were numerous, but maintenance was the recurring issue. So I decided to research and found affordable and asthetically pleasing ways to look after my plants.
          </p>
          <p>
            This blog is about the basics of plant parenthood. I want to help you enjoy healthy, thriving plants.
            A green thumb isn’t about luck but about being observant.
          </p>
          <p>
            I share my tips and findings for house plants and amazing interior decor ideas. We also have a community allowing you to also post and comment on other plant lovers posts!
          </p>
          <p className="quote">
            MAKE THE WORLD A KINDER AND GREENER PLACE BY HELPING EVERYONE SUCCESSFULLY CARE FOR HOUSEPLANTS.
          </p>
        </div>
        <div className="about-image">
          <img src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1626884035/rod-long-IOxO_amkuIc-unsplash_bmgfja.jpg" />
        </div>
      </div>
      <div className="banner">
      </div>
      <h1>Created With...</h1>
      <div className="about-hero">
        <div className="tech">
          <h4 d="tech-title">Programming languages used:</h4>
          <ul>
            <li>Python</li>
            <li>Django</li>
            <li>React</li>
            <li>BootStrap</li>
            <li>JavaScript</li>
            <li>SASS</li>
            <li>HTML</li>
          </ul>
        </div>
        <div className="linkdin">
          <h4 id="linkdin-title">LinkdIn</h4>
          <p>Check out my linkdin page: <Card.Link href="https://www.linkedin.com/in/aya-mallah/" target="_blank"><i className="fab fa-linkedin"></i></Card.Link></p>
        </div>
      </div>
    </>
  )
}
export default About
