
import React, { useState } from 'react'
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from '../AboutUS/About';
import PdfTools from '../PDFTools/PdfTools';
import Printing from '../Printing/Printing';
/*shooping Routes*/
import Shopping from '../Shopping/Shopping';
import Diary from '../Shopping/diary-planner';
import Diarys from '../Shopping/diary';
import Planner from '../Shopping/planner';
import FramesandPosters from'../Shopping/framesandposters';
import CustomizedFrames from'../Shopping/customizedframes';
import MotivationalPosters  from'../Shopping/motivationalposters';
import MotivationalQuoteFrameWithPosters  from '../Shopping/motivationalquoteframewithposters';
import Notebooks from '../Shopping/notebooks';
import CustomizeByCover from '../Shopping/customizebycover';
import CustomizeByName from '../Shopping/customizebyname';
import TPSMERCHANDISE from '../Shopping/tpsmerchandise';
import TPSMERCHANDISE2 from '../Shopping/tpsmerchandise2';
/*shopping Routes*/
import Home from './Home';
import logo from '../images/logo.png';
// import Logo from '../images/lockup-white.png';
import TrackOrder from '../TrackOrder/TrackOrder';
import './Home.css';
import Login from '../Login/Login';

export default function NavbarContent() {
  const [open, setOpen] = useState(false);

  const handleLoginClick = () => {
    setOpen(true)
  }
  return (
    <Router>
      <div>
        <Navbar expand="lg" variant="dark" className="navbar" >
          <Container fluid>
            <Navbar.Brand as={Link} to={"/home"} className="logo">
              <img src={logo} alt="logo" width='80px' height="70px" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                variant="tabs"
                className=" my-2 my-lg-0 mx-auto"
                style={{ maxHeight: '200px', padding: '10px' }}
                navbarScroll
              >
                <Nav.Item className="px-3">
                  <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item className="px-3">
                  <Nav.Link as={Link} to={"/printing"}>Printing</Nav.Link>
                </Nav.Item>
                <Nav.Item className="px-3">
                  <Nav.Link as={Link} to={"/shopping"}>Shopping</Nav.Link>
                </Nav.Item>
                <Nav.Item className="px-3">
                  <Nav.Link as={Link} to={"/pdftool"}>PDF Tools</Nav.Link>
                </Nav.Item>
                <Nav.Item className="px-3">
                  <Nav.Link as={Link} to={"/about"}>About Us</Nav.Link>
                </Nav.Item>
                <Nav.Item className="px-3">
                  <Nav.Link as={Link} to={"/track"}>Track Order</Nav.Link>
                </Nav.Item>
              </Nav>
              <div>
                <Button variant="outline-light" onClick={handleLoginClick}>Login</Button>
                {open ?
                  <Login
                    setOpen={setOpen}
                    open={open}
                  />
                  : " "}
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/printing">
            <Printing />
          </Route>
          <Route path="/shopping">
            <Shopping />
          </Route>
          <Route path="/diary">
            <Diary />
          </Route>
          <Route path="/diarys">
            <Diarys />
          </Route>
          <Route path="/planners">
            <Planner />
          </Route>
          <Route path="/framesandposters">
            <FramesandPosters />
          </Route>
          <Route path="/customizedframes">
            <CustomizedFrames />
          </Route>

          <Route path="/motivationalposters">
            <MotivationalPosters />
          </Route>

          <Route path="/motivationalquoteframewithposters">
            <MotivationalQuoteFrameWithPosters />
          </Route>
          <Route path="/notebooks">
            <Notebooks />
          </Route>
          <Route path="/customizebycover">
            <CustomizeByCover />
          </Route>

          <Route path="/customizebyname">
            <CustomizeByName />
          </Route>

          <Route path="/tpsmerchandise">
            <TPSMERCHANDISE />
          </Route>
        
          <Route path="/tpsmerchandise2">
            <TPSMERCHANDISE2 />
          </Route>

          <Route path="/pdftool">
            <PdfTools />
          </Route>
          <Route path="/track">
            <TrackOrder />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}