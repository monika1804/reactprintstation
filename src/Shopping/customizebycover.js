import React from 'react'
import { Carousel } from 'react-bootstrap';
import './shopping.css';
import {BrowserRouter as Router,Switch,Link} from "react-router-dom";

  
function Users(){
    const data=[
        {id:1,
            image:"./image/cover.png",
            image2:"./image/cover2.png",
            image3:"./image/cover3.png",
            image4:"./image/cover4.png",
            name:"Customize By Cover",
            description:"A4 Spiral Bound Fully Customized Notebook",
            description2:"200 Pages,Unruled,Pack of 1 (Full Customized Cover Page)",
            mrp:"Rs.299",
            price:"Rs.169",
            free:"Free Delivery All Over India"
         
           
        }
    ]
    return(
        <div>
             <div class="container">
            <div class="jumbotron">
            <h2 class="display-4">Customize By Cover</h2>
            <p class="lead">Upload Your Favourite Customize By Cover On Our The Print Station And Get Delivered It to your Doorsteps.</p>
         </div>
        
        </div>
     
            {data.map((user)=>(
                <section class="container-fluid">
 <div className ="card-container">
    <div class="row"> 

    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
    <div class="slider">
    <a href=""><img src={user.image} alt="no" class="book-image" /></a>
    </div>
    </div>

    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
    <div class="slider">
    <a href=""><img src={user.image2} alt="no" class="book-image" /></a>
    </div>
    </div>

    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
    <div class="slider">
    <a href=""><img src={user.image3} alt="no" class="book-image" /></a>
    </div>
    </div>
    
    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
    <div class="slider">
    <a href=""><img src={user.image4} alt="no" class="book-image" /></a>
    </div>
    </div>

    </div><br/>

    <div class="content">
    <p class="description"><b>{user.name}</b></p>
    <p class="description">{user.description} <br/>{user.description2}</p>
    <span class="mrp"><b>Mrp:</b> <del>{user.mrp}</del></span> 
    <p class="description"><b>Rs.</b> {user.price}</p>
    <p class="description">{user.free}</p>

    <form class="form w-25 m-auto">
        
            <input type="file" class="form-control" id="customFile"/><br/>
            <button type="button" class="btn btn-default">Upload</button>
        
        </form><br/>
    
        <div><button type="button" class="btn btn-default">Add To Cart</button></div>
    </div>

</div>

            </section>

            ))}
        </div>
    )
}
export default Users;
