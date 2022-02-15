import React from 'react'
import { Carousel } from 'react-bootstrap';
import Image2 from '../images/diaries.png';
import Image3 from '../images/frames.png';
import Image4 from '../images/books.png';
import logo from '../images/logo.png';
import './Home.css';

function TopContent() {
  return (
    <div class="container py-4">
      <div className="row">
        <div className="col-sm-6">
          <Carousel variant="dark" style={{'margin-top':'5%','box-shadow':'20px 20px 20px 20px rgba(0,0,0,0.253)'}}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Image2}
                alt="First slide"
                
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Image3}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Image4}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>



        <div className="col-sm-6">
          <div className="Top-content">
            <img src={logo} alt="logo"style={{'width':'50%','height':'auto'}}/>
            
            <br /><br />
            <h3 className="header"><strong className="brand-name"><span style={{'color':'snow',fontSize:'4vw'}}>The Print Station</span></strong></h3>
            <h5 className="offer"><span style={{'color':'snow'}}>As Unique As You're...</span></h5>
          </div>
        </div>

      </div>
    </div>
  )
}


export default TopContent
