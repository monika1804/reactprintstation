import React, { useEffect, useState } from 'react'
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import Box from '@mui/material/Box';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  Redirect
} from "react-router-dom";
import About from '../AboutUS/About';
import PdfTools from '../PDFTools/PdfTools';
import Printing from '../Printing/Printing';
import Shopping from '../Shopping/Shopping';
import Home from './Home';
import logo from '../images/logo.png';
// import Logo from '../images/lockup-white.png';
import TrackOrder from '../TrackOrder/TrackOrder';
import './Home.css';
import Login from '../Login/Login';
import Profile from "../Profile/Profile"
import { useAuth } from '../context/context';

export default function NavbarContent() {
  const { currentUser, firebaseLogout, firebaseAuth, cartData } = useAuth()
  const [open, setOpen] = useState(false);
  const [logOut, setLogOut] = useState(false)
  useEffect(()=>{
    if(firebaseAuth.currentUser){
      setLogOut(true)
      setOpen(false)
    }else{
      setLogOut(false)
    }
  },[firebaseAuth.currentUser])

  const changeModalState = () => {
    if(logOut){
      firebaseLogout()
    }
    else {
      setOpen(!open)
    }
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
                {firebaseAuth.currentUser ?
                <>
                <Nav.Item className="px-3">
                  <Nav.Link as={Link} to={"/printing"}>Printing</Nav.Link>
                </Nav.Item>
                <Nav.Item className="px-3">
                  <Nav.Link as={Link} to={"/profile"}>Profile</Nav.Link>
                </Nav.Item>
                </>: ""}
              </Nav>
              <div>
                <Button variant="outline-light" onClick={e => changeModalState()}>{logOut? "Logout": "Login"}</Button>
                <Login
                  changeModalState={changeModalState}
                  open={open}
                />
                <Box sx = {{color:"red"}}>welcome, {currentUser} {JSON.stringify(cartData)}</Box>
                
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
          <Route path="/pdftool">
            <PdfTools />
          </Route>
          <Route path="/track">
            <TrackOrder />
          </Route>
          <Route path = "/profile">
            <Profile />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}