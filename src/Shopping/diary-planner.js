import React from 'react'
import bookstore from './book_data';
import './shopping.css';
import {BrowserRouter as Router,Switch,Link} from "react-router-dom";



  function Users(){
    
    const data=[
        {   id:1,
            image:"./image/diary74.png",
            image2:"./image/diary125.png",
            image3:"./image/diary126.png",
        
            name:"Diary 74",
            name2:"Diary 125",
            name3:"Diary 126",
           
            description:"Diary 74,High Quality PU Leather,Planner/Diary 2022",
            description2:"Diary 125,High Quality PU Leather,Planner/Diary 2022",
            description3:"Diary 126,High Quality PU Leather,Planner/Diary 2022",
        
            mrp:499,
            mrp2:599,
            mrp3:599,
    
            price:299, 
            price2:299,
            price3:299,

            free:"Free Delivery All Over India",
        },
        {
            id:2,
            
            image:"./image/diary127.png",
            image2:"./image/diary128.png",
            image3:"./image/diary129.png",
    
            name:"Diary 127",
            name2:"Diary 128",
            name3:"Diary 129",

            description:"Diary 127,High Quality PU Leather,Planner/Diary 2022",
            description2:"Diary 128,High Quality PU Leather,Planner/Diary 2022",
            description3:"Diary 219,High Quality PU Leather,Planner/Diary 2022",
        
            mrp:599,
            mrp2:599,
            mrp3:599,
        
            price:299, 
            price2:299,
            price3:299, 
           
            free:"Free Delivery All Over India",
        },
        {
            id:3,
        
            image:"./image/diary205.png",
            image2:"./image/diary216.png",
            image3:"./image/diary229.png",
          
            name:"Diary 205",
            name2:"Diary 216",
            name3:"Diary 229",
           
            description:"Diary 205,High Quality PU Leather,Planner/Diary 2022",
            description2:"Diary 216,High Quality PU Leather,Planner/Diary 2022",
            description3:"Diary 229,High Quality PU Leather,Planner/Diary 2022",
          
            mrp:999,
            mrp2:999,
            mrp3:899,
           
            price:449, 
            price2:399,
            price3:399,
          
            free:"Free Delivery All Over India",   
        },
       
        {
            id:4,
            image:"./image/diary4320.png",
            image2:"./image/diary5005.png",
            image3:"./image/diary000.png",
        
            name:"Diary 4320",
            name2:"Folder Diary 5005",
            name3:"Organiser 000",

            description:"Diary 4320 , High Quality PU Leather, Planner/Diary 2022",
            description2:"Folder Diary 5005,High Quality PU Leather,Planner/Diary 2022",
            description3:"Organiser 000,High Quality PU Leather,Planner/Diary 2022",
        
            mrp:"",
            mrp2:1499,
            mrp3:999,

            price:"", 
            price2:849,
            price3:449, 
        
            free:"Free Delivery All Over India", 
        }
        ,
       
        {
            id:5,
            image:"./image/diary106.png",
            image2:"./image/diary109.png",
            image3:"./image/diary119.png",
        
            name:"Organiser 106",
            name2:"Organiser 109",
            name3:"Organiser 119",

            description:"Organiser 106,High Quality PU Leather,Planner/Diary 2022",
            description2:"Organiser 109,High Quality PU Leather,Planner/Diary 2022",
            description3:"Organiser 119,High Quality PU Leather,Planner/Diary 2022",
        
            mrp:1299,
            mrp2:1299,
            mrp3:1199,

            price:699, 
            price2:649,
            price3:599, 
        
            free:"Free Delivery All Over India", 
        },
        {
            id:5,
            image:"./image/diaryWELL.png",
            image2:"./image/diary9009.png",
            image3:"./image/diary9012.png",
        
            name:"Organiser WELL",
            name2:"Organiser 9009",
            name3:"Organiser 9012",

            description:"Organiser WELL,High Quality PU Leather,Planner/Diary 2022",
            description2:"Organiser 9009,High Quality PU Leather,Planner/Diary 2022",
            description3:"Organiser 9012,High Quality PU Leather,Planner/Diary 2022",
        
            mrp:1099,
            mrp2:1099,
            mrp3:1499,

            price:469, 
            price2:569,
            price3:599, 
        
            free:"Free Delivery All Over India", 
        }
    ]
    return (
     <section class="container-fluid">

<div class="wrapper">
      
        <nav id="sidebar">
            <div class="sidebar-header">
                <h4 class="display-6">Featured Products</h4>
            </div>

            <ul class="list-unstyled components">
               
                <li><a href="/diary">Diary's</a></li>
                <li><a href="/planners">Planner's</a> </li>
                <li><a href="#">Customized Frames</a></li>
                <li><a href="#">Motivational Posters</a></li>
                <li><a href="#">Motivational Quote Frame With Posters</a></li>
                <li><a href="#">Customized By Cover</a></li>
                <li><a href="#">Customized By Name</a></li>
                <li><a href="#">TPS Merchandise (coming soon)</a></li>
            </ul>

          
        </nav>

     
        <div id="content">
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
<span class="mrp"><b>MRP:</b> <del>{user.mrp}</del></span> 
<p class="description"><b>RS.</b> {user.price}</p>
<p class="description">{user.free}</p>
</div>
<button type="button" class="btn btn-outline">Add To Cart</button>
</div>

<div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
<div>
<a href=""><img src={user.image2} alt="no" class="book-image" /></a>
</div>
<br/>
<div class="content">
<p class="description"><b>{user.name2}</b></p>
<p class="description">{user.description2}</p>
<span class="mrp"><b>MRP:</b> <del>{user.mrp2}</del></span> 
<p class="description"><b>RS.</b> {user.price2}</p>
<p class="description">{user.free}</p>
</div>
<button type="button" class="btn btn-outline">Add To Cart</button>
</div>  
<div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
<div>
<a href=""><img src={user.image3} alt="no" class="book-image" /></a>
</div>
<br/>
<div class="content">
<p class="description"><b>{user.name3}</b></p>
<p class="description">{user.description3}</p>
<span class="mrp"><b>MRP:</b> <del>{user.mrp3}</del></span> 
<p class="description"><b>RS.</b> {user.price3}</p>
<p class="description">{user.free}</p>
</div>
<button type="button" class="btn btn-outline">Add To Cart</button>
</div> 



</div>

</div>

</section>

))}
         
           
           
           

           
           
          

</div>
    </div>




    

   
          
         </section>

    )
  }
  export default Users; 
/* <div id="section1">
       
   
            <div className="diary">  
            <a href="/diarys"><img src="image/diary109.png" class="img-circle" /></a>
            <p>Diary's</p>
            </div>
            
            <div className="planner">  
            <a href="/planners">
            <img src="image/book2.jpg" class="img-circle" /></a>
            <p> Planner's</p> 

            </div>
            </div>
           */

