import React from 'react'
import './shopping.css';
import {BrowserRouter as Router,Switch,Link} from "react-router-dom";

  
function Users(){
    const data=[
        {id:1,
            image:"./image/set.jpg",
            image2:"./image/set2.jpg",
            image3:"./image/set3.jpg",
            name:"Motivational Posters",
            description:"TPS Motivational Quotes Wall Frame Art,Digital Reprint Poster With Synthetic Wooden Frame,(13.2X9.7inch) (Set Of 1) [WITHOUT GLASS]",
            mrp:"999",
            save:"Rs.700",
            price:"Rs.299",
            free:"Free Delivery All Over India"
           
        },
        {id:2,
            image:"./image/set4.jpg",
            image2:"./image/set5.jpg",
            image3:"./image/set6.jpg",
            name:"Motivational Posters",
            description:"TPS Motivational Quotes Wall Frame Art,Digital Reprint Poster With Synthetic Wooden Frame,(13.2X9.7inch) (Set Of 1) [WITHOUT GLASS]",
            mrp:"999",
            save:"RS.700",
            price:"Rs.299",
            free:"Free Delivery All Over India"
           
        }
      
    ]
    return(
        <div class="container-fluid">

        <div class="container">
            <div class="jumbotron">
            <h6 class="display-5">Motivational Quote Frames With Posters</h6>
            <p class="lead">Pick Your Favourite Motivational Quote Frame With Posters From Our The Print Station And Get Delivered It to your Doorsteps.</p>
         </div>
</div>
            {data.map((user)=>(
                <section class="container-fluid">
 <div className ="card-container">
    <div class="row"> 
    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
    <div>
    <a href=""><img src={user.image} alt="no" class="book-image" /></a>
    </div>
    <br/>
    <div class="content">
    <p class="description"><b>{user.name}</b></p>
    <p class="description">{user.description}</p>
    <span class="mrp"><b>Mrp:</b> <del>{user.mrp}</del></span> 
    <span><b> &nbsp;Save:</b>{user.save}</span>
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
    <span><b> &nbsp;Save:</b>{user.save}</span>
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
    <span><b> &nbsp;Save:</b>{user.save}</span>
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
