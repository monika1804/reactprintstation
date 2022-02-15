import React from 'react'
import './Footer.css';
import logo from '../images/logo.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import {
 
  Link
} from "react-router-dom";

export default function Footer() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  return (
    <div>
      <div className="footer">
        <div className="row">
          <div className="col-md-4 social-content">
            <div className="brand">
             <a href="/home"> <img src={logo} alt="logo"  width='70px' height="70px" /></a>
              <h3 className="title">THE <span style={{'color':'#B61C1C'}}>PRINT </span> STATION</h3>
            </div>
          
            <div className="community">
              <h4 className="text">Join Our Social Community</h4>
              <br/>
              <div className="icon-content">
                <LinkedInIcon style={{'font-size':'32px'}} size="2x" onClick={() => openInNewTab('https://www.linkedin.com/in/aman-chauhan-865233207')} />
                <InstagramIcon style={{'font-size':'32px'}} onClick={() => openInNewTab('https://instagram.com/itschauhan_aman')} />
                <TwitterIcon style={{'font-size':'32px'}}  onClick={() => openInNewTab('https://twitter.com/its_chauhanAMAN?s=09')} />
                <EmailIcon style={{'font-size':'32px'}} onClick={() => openInNewTab('mailto:info.theprintstation@gmail.com')} />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="middle-content">
              <br/>
              <h4 style={{color:'#fff'}}>OUR SERVICES</h4>
              <br/>
              <div className="service-content">
                
                <h5><a href="/shopping">SHOPPING</a></h5>
                <h5><a href="/printing">PRINTING</a></h5>
                <h5><a href="/home">PDF CONVERTER</a></h5>
              
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="middle-content">
              <br/>
              <h4 style={{color:'#fff'}}>OUR CONTACT</h4>
              <br/>
              <div className="service-content">
    
                <h5 className="contact"><AddIcCallIcon  />
                 <a class="phone refrence" href ="tel:+ 91 876543214 pn.html" target="self">
                 <span class="phone-number">+ 91 876543214</span></a></h5>
                <h5 onClick={() => openInNewTab('mailto:info.theprintstation@gmail.com')} className="contact">
                  
                <EmailIcon/> info.the<span style={{ 'color':'#B61C1C','font-weight':'bold'}}>print</span>station@gmail.com</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
