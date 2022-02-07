
import React from 'react'
import Video from "../Video/video.mp4";
import "./Home.css"


export default function VideoContent() {
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <h1>The <span style={{'color':'#B61C1C'}}>Print</span> Station</h1>
          <h4>We're Offering Faster Delivery (with 2-3 days) & Normal Delivery(with 3-5 days)</h4>
          <br/>
          <p>The Print Station app is the smarter way to order your printing in app and
           Our team will carefully package it and get it delivered to your doorsteps.
           We charge No fees on delivery for the cart value
          greater than Rupees 199 while Pickup from our Outlets can be done by
           you for FREE at any Cart value.<br/><br/>
          Normal Delivery is free of any charges i.e. Free Delivery <br/>of Faster
           Delivery you have to pay some Nominal delivery charges.
           We introduced this charges to make sure the services works around the 
           clock and you receive your deliveries on time.</p>
        </div>
        <div className="col-md-6">
        <iframe  width="100%" height="100%" src="https://www.youtube.com/embed/to9_9z8xvpo" title="YouTube video player" frameborder="0" allow="accelerometer; 
        autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}


