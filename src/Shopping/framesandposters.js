import React from 'react'
import bookstore from './book_data';
import './shopping.css';
import {BrowserRouter as Router,Switch,Link} from "react-router-dom";

export default function FramesandPosters() {
    return (
     <section class="container-fluid">
             
    <nav className="sidenav">
       
    <ul className="side-nav">
    
    <a href="/diary"><li> DIARY'S AND PLANNERS </li></a>
    <a href="/framesandposters"> <li>FRAMES AND POSTERS</li></a>
    <a href="/notebooks"><li> NOTEBOOKS</li></a>
    <a href="/tpsmerchandise"><li>TPS MERCHANDISE(COMING SOON)</li></a>
    </ul>
    </nav>

    <div id="section2">
            <div className="customizedframes">  
            <a href="/customizedframes"><img src="image/complete package_set.png" class="img-circle" /></a>
            <p>Customized Frames</p>
            </div>
            <br></br>

            <div className="motivationalposters">  
            <a href="/motivationalposters"><img src="image/Main Image2.png" class="img-circle" /></a>
            <p>Motivational Posters</p>
            </div>

            <br></br>
            <div className="motivationalquotesframeswithposters">  
            <a href="/motivationalquoteframewithposters"><img src="image/set.jpg" class="img-circle" /></a>
            <p>Motivational Quote Frame With Posters</p>

            </div>
            <br></br>
            </div>


   
           
     </section>
    )
  }
  


