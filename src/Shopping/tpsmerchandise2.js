import React from 'react'
import './shopping.css';
import {BrowserRouter as Router,Switch,Link} from "react-router-dom";

  
function Users(){
    const data=[
        {id:1,
            image:"./image/Mug1.jpg",
            image2:"./image/Tee1.jpg",
            image3:"./image/Tee2.jpg"
           
        },
        {   id:2,
            image:"./image/Tee3.jpg",
            image2:"./image/Tee4.jpg",
            image3:"./image/Tee5.jpg"
          
        }
    ]
    return(
        <>
        <div class="container backcolor">
            <div class="row">
            <div class="col-xl-8 col-lg-6 col-md-6 col-sm-6">
                <img src="image/tps.png" alt="no" class="tps-image" />  
                </div>
          
                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
            
            <h1 class="display-4">TPS MERCHANDISE</h1>
            <p class="lead">The href attribute requires a valid value to be accessible.

                 Provide a valid, navigable address as the href value. 

                 If you cannot provide a valid href, but still need the element</p>
               
           
            </div>
                </div>

             
       
       </div>
        <div>
           

            {data.map((user)=>(
                <section class="container-fluid">
 <div className ="card-container">
    <div class="row"> 
    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
    <div>
    <a href=""><img src={user.image} alt="no" class="book-image" /></a>
    </div>
    <br/>
    </div>

    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
    <div>
    <a href=""><img src={user.image2} alt="no" class="book-image" /></a>
    </div>
    <br/>
    </div>  

    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
    <div>
    <a href=""><img src={user.image3} alt="no" class="book-image" /></a>
    </div>
    </div> 
    
    </div>

</div>

            </section>

            ))}
        </div>
        </>
    )
}
export default Users;
