import React from 'react'
import bookstore from './book_data';
import './shopping.css';
import {BrowserRouter as Router,Switch,Link} from "react-router-dom";

export default function TPSmerchandise() {
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
    <div id="section4">
            <div className="tpsmerchandise">  
            <a href="/tpsmerChandise2"><img src="image/Tee2.jpg" class="img-circle" /></a>
            <p>TPS Merchandise (Coming Soon)</p>
            </div>
            <br></br>
            
            </div>
    </section>
    )
  }
  


