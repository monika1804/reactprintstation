import React from 'react'
import bookstore from './book_data';
import './shopping.css';
import {BrowserRouter as Router,Switch,Link} from "react-router-dom";

export default function Notebooks() {
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
    <div id="section3">
            <div className="customizebycover">  
            <a href="/customizebycover"><img src="image/cover.png" class="img-circle" /></a>
            <p>Customize By Cover</p>
            
            </div>
            <br></br>
            <div className="customizebyname">  
            <a href="/customizebyname"><img src="image/name1.png" class="img-circle" /></a>
            <p>Customize By Name</p>
            </div>
            <br></br>
            </div>
    </section>
    )
  }
  


