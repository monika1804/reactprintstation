import React from 'react'
import './shopping.css';
import {BrowserRouter as Router,Switch,Link} from "react-router-dom";

  
function Users(){
    const data=[
        {id:1,
            image:"./image/name1.png",
            image2:"./image/name2.png",
            image3:"./image/name3.png",
            name:"Customize By Name",
            description:"A4 Spiral Bound Fully Notebook,200 Pages, 29X21cm, unruled,Pack of 1 (Customized Nmae Notebook)",
            mrp:"Rs.199",
            price:"Rs.149",
            free:"Free Delivery All Over India"
           
        },
        {id:2,
            image:"./image/name5.png",
            image2:"./image/name6.png",
            image3:"./image/name7.png",
            name:"Customize By Name",
            description:"A4 Spiral Bound Fully Notebook,200 Pages, 29X21cm, unruled,Pack of 1 (Customized Nmae Notebook)",
            mrp:"Rs.199",
            price:"Rs.149",
            free:"Free Delivery All Over India"
           
        }
    ]
    return(
        <div>
               <div class="container">
            <div class="jumbotron">
            <h2 class="display-4">Customize By Name</h2>
            <p class="lead">Pick Your Favourite Customize By Name From Our The Print Station And Get Delivered It to your Doorsteps.</p>
         </div>
        
        </div>
            {data.map((user)=>(
                <section class="container-fluid">
 <div className ="card-container">
    <div class="row"> 
    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
    <div>
    <a href=""><img src={user.image} alt="no" class="book-image" /></a>
    </div><br/>
    <div class="content">
    <p class="description"><b>{user.name}</b></p>
    <p class="description">{user.description}</p>
    <span class="mrp"><b>Mrp:</b> <del>{user.mrp}</del></span> 
    <p class="description"><b>Rs.</b> {user.price}</p>
    <p class="description">{user.free}</p>
    </div>
    <div><button type="button" class="btn btn-default">Add To Cart</button></div>
    <br/>
    </div>

    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
    <div>
    <a href=""><img src={user.image2} alt="no" class="book-image" /></a>
    </div>
    <br/>
    <div class="content">
    <p class="description"><b>{user.name}</b></p>
    <p class="description">{user.description}</p>
    <span class="mrp"><b>Mrp:</b> <del>{user.mrp}</del></span> 
    <p class="description"><b>Rs.</b> {user.price}</p>
    <p class="description">{user.free}</p>
    </div>
    <div><button type="button" class="btn btn-default">Add To Cart</button></div>
    <br/>
    </div>  

    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
    <div>
    <a href=""><img src={user.image3} alt="no" class="book-image" /></a>
    </div>
    <br/>
    <div class="content">
    <p class="description"><b>{user.name}</b></p>
    <p class="description">{user.description}</p>
    <span class="mrp"><b>Mrp:</b> <del>{user.mrp}</del></span> 
    <p class="description"><b>Rs.</b> {user.price}</p>
    <p class="description">{user.free}</p>
    </div>
    <div><button type="button" class="btn btn-default">Add To Cart</button></div>
    </div> 
    
    </div>

</div>

            </section>

            ))}
        </div>
    )
}
export default Users;
