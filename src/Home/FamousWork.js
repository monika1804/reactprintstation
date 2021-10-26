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
      <div>
        <div className="work-content">
          <div>
            <h1 className="famous-title">FAMOUS WORK</h1>
          </div>
          <CardGroup>
            <Card className="famous-card" as={Link} to={"/shopping"}>
              <Card.Img variant="top" src={Image2} />
              <Card.Body>
                <Card.Title className="work-title">SHOPPING</Card.Title>
              </Card.Body>
            </Card>
            <Card className="famous-card" as={Link} to={"/printing"}>
              <Card.Img variant="top" src={Image1} />
              <Card.Body>
                <Card.Title className="work-title">
                  PRINTING
                </Card.Title>
              </Card.Body>
            </Card>
            <Card className="famous-card" as={Link} to={"/pdftool"}>
              <Card.Img variant="top" src={Image3} />
              <Card.Body>
                <Card.Title className="work-title">PDF CONVERTER</Card.Title>
              </Card.Body>
            </Card>
          </CardGroup>
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
