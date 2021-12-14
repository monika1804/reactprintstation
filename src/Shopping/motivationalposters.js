import React from 'react'
import './shopping.css';
import {BrowserRouter as Router,Switch,Link} from "react-router-dom";

  
function Users(){
    const data=[
        {id:1,
            image:"./image/Main Image.png",
            image2:"./image/Main Image2.png",
            image3:"./image/Main Image3.png",
            name:"Motivational Posters",
            description:"A4 Size,HD Wall Posters 300 GSM Glossy Paper With Gloss Laminated(Multicolor),Pack Of 1",
            mrp:"399",
            price:"99",
            free:"Free Delivery Just Above Rs.199",

           
        },
        {id:2,
            image:"./image/Main Image4.png",
            image2:"./image/Main Image5.png",
            image3:"./image/Main Image6.png",
            name:"Motivational Posters",
            description:"A4 Size,HD Wall Posters 300 GSM Glossy Paper With Gloss Laminated(Multicolor),Pack Of 1",
            mrp:"399",
            price:"99",
            free:"Free Delivery Just Above Rs.199"
           
        },
        {id:3,
            image:"./image/Main Image7.png",
            image2:"./image/Main Image8.png",
            image3:"./image/Main Image9.png",
            name:"Motivational Posters",
            description:"A4 Size,HD Wall Posters 300 GSM Glossy Paper With Gloss Laminated(Multicolor),Pack Of 1",
            mrp:"399",
            price:"99",
            free:"Free Delivery Just Above Rs.199"
           
        },
        {id:4,
            image:"./image/Main Image10.png",
            image2:"./image/Main Image11.png",
            image3:"./image/Main Image12.png",
            name:"Motivational Posters",
            description:"A4 Size,HD Wall Posters 300 GSM Glossy Paper With Gloss Laminated(Multicolor),Pack Of 1",
            mrp:"399",
            price:"99",
            free:"Free Delivery Just Above Rs.199"
           
        },
        {id:5,
            image:"./image/Main Image13.png",
            image2:"./image/Main Image14.png",
            image3:"./image/Main Image15.png",
            name:"Motivational Posters",
            description:"A4 Size,HD Wall Posters 300 GSM Glossy Paper With Gloss Laminated(Multicolor),Pack Of 1",
            mrp:"399",
            price:"99",
            free:"Free Delivery Just Above Rs.199"
           
        },
        {id:6,
            image:"./image/Main Image16.png",
            image2:"./image/Main Image17.png",
            image3:"./image/Main Image18.png",
            name:"Motivational Posters",
            description:"A4 Size,HD Wall Posters 300 GSM Glossy Paper With Gloss Laminated(Multicolor),Pack Of 1",
            mrp:"399",
            price:"99",
            free:"Free Delivery Just Above Rs.199"
           
        },
        {id:7,
            image:"./image/Main Image19.png",
            image2:"./image/Main Image20.png",
            image3:"./image/Main Image21.png",
            name:"Motivational Posters",
            description:"A4 Size,HD Wall Posters 300 GSM Glossy Paper With Gloss Laminated(Multicolor),Pack Of 1",
            mrp:"399",
            price:"99",
            free:"Free Delivery Just Above Rs.199"
           
        },
        {id:8,
            image:"./image/Main Image22.png",
            image2:"./image/Main Image23.png",
            image3:"./image/Main Image24.png",
            name:"Motivational Posters",
            description:"A4 Size,HD Wall Posters 300 GSM Glossy Paper With Gloss Laminated(Multicolor),Pack Of 1",
            mrp:"399",
            price:"99",
            free:"Free Delivery Just Above Rs.199"
           
        },
        {id:9,
            image:"./image/Main Image25.png",
            image2:"./image/Main Image26.png",
            image3:"./image/Main Image27.png",
            name:"Motivational Posters",
            description:"A4 Size,HD Wall Posters 300 GSM Glossy Paper With Gloss Laminated(Multicolor),Pack Of 1",
            mrp:"399",
            price:"99",
            free:"Free Delivery Just Above Rs.199"
           
        }
    ]
    return(
        <div class="container-fluid">

        <div class="container">
            <div class="jumbotron">
            <h2 class="display-4">Motivational Posters</h2>
            <p class="lead">Pick Your Favourite Motivational Posters From Our The Print Station And Get Delivered It to your Doorsteps.</p>
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
