import React, {useState} from 'react'
import './shopping.css';
import {customizebycoverData} from "./customizebycover_data"
import {BrowserRouter as Router,Switch,Link} from "react-router-dom";
import { Carousel } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

function Planners(){
    let [carousel, setCarousel] = useState(customizebycoverData[0])
    const handleImageClick=(e, key)=> {
        setCarousel(customizebycoverData[key])
    }
    const [selected, setSelected] = useState(0) 
    const [mainPrice, setMainPrice] = useState(carousel.mainprice[0])
    const [prePrice, setPrePrice] = useState(carousel.preprice[0])
    const [savePrice, setSavePrice] = useState(carousel.saveprice[0])
    const handleSelect = (e) => {
        setSelected(e.target.value)
        setMainPrice(carousel.mainprice[e.target.value])
        setPrePrice(carousel.preprice[e.target.value])
        setSavePrice(carousel.saveprice[e.target.value])
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
    {customizebycoverData.map((images, key) => {
        return(<img key = {key} src= {images.mainImage} class="book-image3" onClick = {e => handleImageClick(e, key)}/>)
    })}
 </div>  
 <br/>
<select class="form-select" onClick = {e => handleSelect(e)} aria-label="Default select example" style={{'width':'40vw','margin':'auto'}}>
  <option selected>Select Variant</option>
  <option value="0">1 Notebook,200 Pages</option>
  <option value="1">1 Notebook,300 Pages</option>
  <option value="2">1 Notebook,400 Pages</option>
</select><br/>
<h5 style={{'color':'black'}}>A4 Spiral Bound Fully Customized Notebook,{carousel.numPage[selected]} Pages,Unruled,Pack of 1(Full Customized Cover Page)</h5>
<h6 style={{'color':'black'}}>{mainPrice} <span style={{'color':'#ababab', 'text-decoration': 'line-through'}}>{prePrice}</span></h6>
<h6 style={{'color':'green'}}>{savePrice}</h6><br/>
<div style={{'border-bottom':'1px solid grey','width':'50%','margin':'auto'}}></div><br/>
<h4 style={{'color':'black'}}>Description</h4>
<h6 >{carousel.description}</h6><br/>
<h5 style={{'color':'black'}}>Description</h5>
<h6 style={{'color':'black'}}>{carousel.description2}</h6>
<h6 style={{'color':'black'}}>{carousel.description3}</h6>
<h6 style={{'color':'black'}}>{carousel.description4}</h6>
<h6 style={{'color':'black'}}>{carousel.description5}</h6>
<h6 style={{'color':'black'}}>{carousel.description6}</h6>
<h6 style={{'color':'black'}}>{carousel.description7}</h6>
<h6 style={{'color':'black'}}>{carousel.description8}</h6>
<br/>
<br/>

<div class="m-auto w-50 p-4" style={{'border':'1px solid lightgray'}}>
<h4 style={{color:'#0277BD'}}>Additional Details Required</h4>
<p>The product you are trying to add to card requires additional details.
     <br/>Please give us some more information.</p>
<form >
     <input  type="radio" id="r1" name="fav_language" value="The Print Station Decides"/> Let The Print Station decide the details for me.
     <br/><br/>
     <input type="radio" id="r2" name="fav_language" value="Input Myself"/> No, I 'll input the details myself.
       <br/><br/>
       
    <h5  style={{color:'#0277BD'}}> Select your cover photo</h5>
  
    <input type="file" id="img" name="img" accept="image/*" style={{border:'1px solid lightgray',color:'#0277BD'}}/>
     </form>
</div>

<br/><br/>
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
