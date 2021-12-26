
import React, {useState} from 'react'
import './shopping.css';
import {tpsData} from "./tpsmerchandise2"
import {BrowserRouter as Router,Switch,Link} from "react-router-dom";
import { Carousel } from 'react-bootstrap';
  

function Planners(){
    let [carousel, setCarousel] = useState(tpsData[0])
    const handleImageClick=(e, key)=> {
        setCarousel(tpsData[key])
    }
    
    
  

    return( 
        
<div class="container-fluid">
<div class="imgcarousel">

     
<Carousel variant="dark">
{carousel.carouselImages.map((image, key)=>{
    return(
        <Carousel.Item>
        <img src={image} class="book-image4" />
        </Carousel.Item>
    )
})}
</Carousel>    

<div class="imgonclick">
    {tpsData.map((images, key) => {
        return(<img key = {key} src= {images.mainImage} class="book-image3" onClick = {e => handleImageClick(e, key)}/>)
    })}
 </div>  

<h5 style={{'color':'black'}}>365 Days Planner with Health Checklist</h5>
<h6 style={{'color':'black'}}>Rs.199.00 <span style={{'color':'#ababab'}}>Rs.{carousel.price}</span></h6>
<h6 style={{'color':'green'}}>Save Rs.200.00</h6><br/>
<div style={{'border-bottom':'1px solid grey','width':'50%','margin':'auto'}}></div><br/>
<h4 style={{'color':'black'}}>Description</h4>
<span>{carousel.description}</span>
</div>
        </div>
    )
}
export default Planners;
