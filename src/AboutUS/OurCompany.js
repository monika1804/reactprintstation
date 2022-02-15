import React from 'react'
import './About.css';
import Image from '../images/our.jpg';

function OurCompany() {
  return (
    <div>
      <div className="main-container">
        <div className="row">
          <div className="col-md-6">
            <div className="image-content">
              <img
                className="d-block m-auto"
                src={Image}
                alt="grey"
                height="auto"
                width="100%"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <br/>
              <h1 className="display-4"  style={{fontSize:'2.09rem'}}><b><span style={{fontSize:'4.00rem',color:' #a00000'}}>O</span>UR<span style={{fontSize:'4.00rem',color:' #a00000'}}>&nbsp;C</span>OMPANY</b></h1>
              
              <div>
                <p className="lead about-content">
                The Print Station is India's first web/App-based Document Printing Store. We are a web/App-based comfort printing store committed to YOU! Our point is to give you admittance to quality items printing without burning through any time or energy. The Print Station app is an exceptional site planned while remembering your day by day printing needs. At The Print Station app, we guarantee to give interesting, reasonable, and simple printing arrangements.

We oblige the printing needs of each and every individual who has a printing current task! You simply transfer your report document, make the installment, and you are arranged! We will convey the prints at your doorstep. The basic and simple to-explore cycle will have your request set surprisingly fast!

We are supporting "docx., doc, ppt, pptx, jpg, png, pdf" designs . We certainly plan to take the entire container soon!!! So how about we drop the exhausting stuff here just and begin printing!! Check us out! ;)


                </p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default OurCompany
