
import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from '../AboutUS/About';
import Printing from '../Printing/Printing';
import Shopping from '../Shopping/Shopping';
import Home from './Home';

export default function NavbarContent() {
  return (
    <Router>
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">Print Station</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                <Nav.Link as={Link} to={"/printing"}>Printing</Nav.Link>
                <Nav.Link as={Link} to={"/shopping"}>Shopping</Nav.Link>
                <Nav.Link as={Link} to={"/pdftool"}>PDF Tools</Nav.Link>
                <Nav.Link as={Link} to={"/about"}>About Us</Nav.Link>
                <Nav.Link as={Link} to={"/track"}>Track Order</Nav.Link>
              </Nav>
              <Button variant="outline-success">Login</Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <Switch>
          <Route path="/printing">
            <Printing />
          </Route>
          <Route path="/shopping">
            <Shopping />
          </Route>
          <Route path="/pdftool">
            <Shopping />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/track">
            <Shopping />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
