import React from 'react'
import './shopping.css';
import {BrowserRouter as Router,Switch,Link} from "react-router-dom";

  
function Planners(){
    const data=[
        {id:1,
            image:"./image/book2.jpg",
            image2:"./image/book1.jpg",
            image3:"./image/book3.jpg",
            image4:"./image/book4.jpg",
            name:"365 Days Planner",
            name2:"Weekly Planner",
            description:"365 Days/Yearly Planner, 365 Pages, Size A5, A planner For Every Day of the year,Spiral Bounds",
            description2:"Weekly Planner,104 weeks Organizer, Size A5, A planner For Every Week For 2 years,Spiral Bounds",
            mrp:399,
            mrp2:399,
            mrp3:299,
            mrp4:299,
            price:199, 
            price2:199, 
            price3:99, 
            price4:99,
        }
    ]
    return(
        
        <div class="container-fluid">

       
            {data.map((user)=>(
                <section class="container-fluid">
 <div className ="card-container">
    <div class="row"> 
    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
    <div>
    <a href=""><img src={user.image} alt="no" class="book-image" /></a>
    </div>
    <br/>
    <p><b>{user.name}</b></p>
    <p>{user.description}</p><br/>
    <span><b>Mrp: </b><del class="mrp">{user.mrp}</del></span>
    <p class="book-price"><b>Rs.</b> {user.price} </p>
    <button type="button" class="btn btn-outline">Add To Cart</button>
    </div>

    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6">
    <div>
    <a href=""><img src={user.image2} alt="no" class="book-image" /></a>
    </div>
    <br/>
    <p><b>{user.name}</b></p>
    <p>{user.description}</p><br/>
    <span><b>Mrp: </b><del class="mrp">{user.mrp2}</del></span>
    <p class="book-price"><b>Rs.</b> {user.price2}</p>
    <button type="button" class="btn btn-outline">Add To Cart</button>
    </div>  
    
    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6">
    <div>
    <a href=""><img src={user.image3} alt="no" class="book-image" /></a>
    </div>
    <br/>
    <p><b>{user.name2}</b></p>
    <p>{user.description2}</p><br/>
    <span><b>Mrp: </b><del class="mrp">{user.mrp3}</del></span>
    <p class="book-price"><b>Rs.</b> {user.price3} </p>
    <button type="button" class="btn btn-outline">Add To Cart</button>
    </div>  

    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6">
    <div>
    <a href=""><img src={user.image4} alt="no" class="book-image" /></a>
    </div>
    <br/>
    <p><b>{user.name2}</b></p>
    <p>{user.description2}</p><br/>
    <span><b>Mrp: </b><del class="mrp">{user.mrp4}</del></span>
    <p class="book-price"><b>Rs.</b> {user.price4} </p>
    <button type="button" class="btn btn-outline">Add To Cart</button>
    </div>  



    </div>

</div>

            </section>

            ))}
        </div>
    )
}
export default Planners;
