import React from 'react'
import { Card } from 'react-bootstrap';
import Image from '../images/lib.jpg';
import './About.css';
import ChooseUs from './ChooseUs';
import OurCompany from './OurCompany';
import FAQ from './FAQ';
import Footer from '../Footer/Footer';

export default function About() {
  return (
    <div class="text-center">
     <Card className="text-white">

<Card.Img src="images/aboutus.jpg"alt="Card image" className="about-bg" />
<Card.ImgOverlay className="title-content">

</Card.ImgOverlay>
</Card>
<div className="company-content p-4">
        <OurCompany />
      </div>
<hr></hr>
     
      <div className="faq-content p-2 ">
        <FAQ />
      </div>
<br/><br/>
      <div xs={12} className="footer">
        <Footer />
      </div>

    </div>
  )
}
/*
     
     
     
    */