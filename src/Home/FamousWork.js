import React from 'react'
import { Card, CardGroup } from 'react-bootstrap';
import PdfTools from '../PDFTools/PdfTools';
import Printing from '../Printing/Printing';
import Shopping from '../Shopping/Shopping';
import Image1 from '../images/Printing2.jpg';
import Image2 from '../images/booklet.jpg';
import Image3 from '../images/pdf2.jpg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function FamousWork() {
  return (
    <Router>
      <div className="container">
        <div className="work-content">
       
            <h1 className="famous-title">FAMOUS WORK</h1>
      
      
          <br/>
          <div>
          <CardGroup >
          <Card style={{ width: '14rem','margin':'15px','padding':'2%' ,'background-color': '#ffffff',
              'background-image': 'linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%)' }}>
            <Card.Link href="/shopping">
         <Card.Img variant="top" src={Image2} />
          <Card.Body>
          <Card.Title>
            <h2>SHOPPING</h2>
          </Card.Title>

          </Card.Body>
          </Card.Link>
          </Card>

          <Card style={{ width: '14rem','margin':'15px','padding':'2%','background-color': '#ffffff',
              'background-image': 'linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%)' }}>
            <Card.Link href="/printing">
         <Card.Img variant="top" src={Image1} />
          <Card.Body>
          <Card.Title>
          <h2>PRINTING</h2>
          </Card.Title>
          </Card.Body>
          </Card.Link>
          </Card>


          <Card style={{ width: '14rem','margin':'15px' ,'padding':'2%' ,'background-color': '#ffffff',
              'background-image': 'linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%)' }}>
            <Card.Link href="/pdftool">
         <Card.Img variant="top" src={Image3} />
          <Card.Body>
          <Card.Title>
          <h2>PDF TOOL</h2>
          </Card.Title>
      
          </Card.Body>
          </Card.Link>
          </Card>
          </CardGroup >
          </div>


        </div>
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
            <PdfTools />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
