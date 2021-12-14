import React from 'react'
import bookstore from './book_data';
import './shopping.css';
import {BrowserRouter as Router,Switch,Link} from "react-router-dom";
import Card from "react-bootstrap/Card";
 
function Users(){
    
return(
    <section class="container-fluid">
  
    
<div class="container">
  

<div class="back-shop-content">
<h1>THE <span style={{'color':'red'}}>PRINT</span> STATION</h1><br/>
<h4>WHAT WOULD YOU LIKE TO PURCHASE TODAY?</h4>
<p>WE SOMEHOW HAVE THE BEST STATIONARY ON THE MARKET.</p>
</div>

<div>
  <a href="/diary">diary</a><br></br>
  <a href="/planners">planner</a><br></br>
  <a href="/customizedframes">Customized Frames</a><br></br>
  <a href="/motivationalposters">Motivational Posters</a><br></br>
  <a href="/motivationalquoteframewithposters">Motivational Quote Frame with Posters</a><br></br>
  <a href="/customizebycover">Customize By Cover</a><br></br>
  <a href="/customizebyname">Customize By Name</a><br></br>
  <a href="/tpsmerChandise2">TPS merchandise</a>
</div>




</div>












</section>

    )
}
export default Users;
