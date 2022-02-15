
import React, {useState} from 'react'
import './shopping.css';
import {tpsData} from "./tpsmerchandise2"
import {BrowserRouter as Router,Switch,Link} from "react-router-dom";
import { Carousel } from 'react-bootstrap';
import Footer from '../Footer/Footer'; 

function Planners(){
    let [carousel, setCarousel] = useState(tpsData[0])
    const handleImageClick=(e, key)=> {
        setCarousel(tpsData[key])
    }
    
    
  

    return( 
        
<div class="text-center">
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



<h5 style={{'color':'black'}}>{carousel.plannername}</h5>
<h6 style={{'color':'black'}}>{carousel.mainprice} <span style={{'color':'#ababab', 'text-decoration': 'line-through'}}>{carousel.preprice}</span></h6>
<h6 style={{'color':'green'}}>{carousel.saveprice}</h6><br/>
<div style={{'border-bottom':'1px solid grey','width':'50%','margin':'auto'}}></div><br/>
<h4 style={{'color':'black'}}>Description</h4>
<h6>{carousel.description}</h6><br/>
<a href="/menucard"><button type="button" class="btn btn-light">BACK</button></a>
<button type="button" class="btn btn-primary">Add To Cart</button><br/><br/>

</div>
<br/><br/><br/><br/>


<div xs={12} className="footer">
        <Footer />
      </div>
        </div>
    )
}
export default Planners;