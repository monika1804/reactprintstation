import React from 'react'
import './Footer.css';
import logo from '../images/logo.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="row">
          <div className="col-md-4 social-content">
            <div className="brand">
              <img src={logo} alt="logo" width='80px' height="70px" />
              <h2 className="title">THE PRINT STATION</h2>
            </div>
            <div>
              <h4 className="text">Join Our Social Community</h4>
              <div className="icon-content">
                <LinkedInIcon />
                <InstagramIcon />
                <TwitterIcon />
                <EmailIcon />
              </div>
            </div>
          </div>
          <div className="col-md-4">

          </div>
          <div className="col-md-4">

          </div>
        </div>
      </div>

    </div>
  )
}
