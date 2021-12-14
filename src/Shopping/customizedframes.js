import React from 'react'
import './shopping.css';
import {BrowserRouter as Router,Switch,Link} from "react-router-dom";

  
function Users(){
    const data=[
        {id:1,
            image:"./image/complete package_set.png",
            image2:"./image/complete package_set2.png",
            image3:"./image/complete package_set3.png",
            name:"Customized Frames",
            description:"Customized Photo - Frame, A4 Size(8.3X11.7 inches)Personalized Gift",
            mrp:"599",
            price:"349",
            free:"Free Delivery All Over India"
           
        }
    ]
    return(
        <div class="container-fluid">

        <div class="container">
            <div class="jumbotron">
            <h2 class="display-4">Customized Frames</h2>
            <p class="lead">Upload Your Favourite Customized Frames on Our The Print Station And Get Delivered It to your Doorsteps.</p>
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
    <p class="description">{user.description} <br/>{user.description2}</p>
    <span class="mrp"><b>Mrp:</b> <del>{user.mrp}</del></span> 
    <p class="description"><b>Rs.</b> {user.price}</p>
    <p class="description">{user.free}</p>

    <form class="form m-auto">
    <input type="file" class="form-control" id="customFile"/><br/>
    <button type="button" class="btn btn-default">Upload</button>
    </form><br/>
    </div>
    <div><button type="button" class="btn btn-default">Add To Cart</button></div>
    <br/>
    </div>


    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
    <div>
    <a href=""><img src={user.image2} alt="no" class="book-image" /></a>
    </div><br/>
    <div class="content">
    <p class="description"><b>{user.name}</b></p>
    <p class="description">{user.description} <br/>{user.description2}</p>
    <span class="mrp"><b>Mrp:</b> <del>{user.mrp}</del></span> 
    <p class="description"><b>Rs.</b> {user.price}</p>
    <p class="description">{user.free}</p>

    <form class="form m-auto">
    <input type="file" class="form-control" id="customFile"/><br/>
    <button type="button" class="btn btn-default">Upload</button>
    </form><br/>
    </div>
    <div><button type="button" class="btn btn-default">Add To Cart</button></div>
    <br/>
    </div>  

    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
    <div>
    <a href=""><img src={user.image3} alt="no" class="book-image" /></a>
    </div><br/>
    <div class="content">
    <p class="description"><b>{user.name}</b></p>
    <p class="description">{user.description} <br/>{user.description2}</p>
    <span class="mrp"><b>Mrp:</b> <del>{user.mrp}</del></span> 
    <p class="description"><b>Rs.</b> {user.price}</p>
    <p class="description">{user.free}</p>

    <form class="form m-auto">
    <input type="file" class="form-control" id="customFile"/><br/>
    <button type="button" class="btn btn-default">Upload</button>
    </form><br/>
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
