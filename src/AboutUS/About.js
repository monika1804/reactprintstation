<<<<<<< HEAD
import React from "react";
=======
import React from 'react'
import { Card } from 'react-bootstrap';
import Image from '../images/lib.jpg';
import './About.css';
import ChooseUs from './ChooseUs';
import OurCompany from './OurCompany';
import FAQ from './FAQ';
>>>>>>> 28e46b6aae42c2e3dcda77dc18a87c0711d5f1de


function About() {
  return (
<<<<<<< HEAD
    <div className="about">
      <div class="container">
          backgroundImage: `url("https://via.placeholder.com/500")`
      <div class="col-lg-5">
            <h1 class="font-weight-light">About</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
=======
    <div>
      <Card className="bg-dark text-white">
        <Card.Img src={Image} alt="Card image" className="about-bg" />
        <Card.ImgOverlay className="title-content">
          <Card.Title className="about-title">ABOUT US</Card.Title>
        </Card.ImgOverlay>
      </Card>
      <div className="company-content">
        <OurCompany />
      </div>
      <div className="choose-conent">
        <ChooseUs />
      </div>
      <div className="faq-content">
        <FAQ />
>>>>>>> 28e46b6aae42c2e3dcda77dc18a87c0711d5f1de
      </div>
    </div>
  );
}

export default About;