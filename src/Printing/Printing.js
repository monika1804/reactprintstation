import React from 'react'
import { Card } from 'react-bootstrap';
import Image from '../images/printing-man.jpg';
import './Printing.css'

export default function Printing() {
  return (
    <div>
      <Card className="text-white">
        <Card.Img src={Image} alt="Card image" className="about-bg" />
        <Card.ImgOverlay className="title-content">
          <Card.Title className="about-title">PRINTING</Card.Title>
        </Card.ImgOverlay>
      </Card>
    </div>
  )
}
