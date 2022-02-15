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
      <div className="container text-center">
        <div className="work-content">
       
            <h1 className="display-4 famous-title" style={{fontSize:'2.09rem'}}><b><span style={{fontSize:'4.00rem',color:' #a00000'}}>F</span>AMOUS<span style={{fontSize:'4.00rem',color:' #a00000'}}>  W</span>ORK</b></h1>
      
      
          <br/>
          <div>
          <CardGroup >
          <Card style={{ width: '14rem','margin':'20px','padding':'2%' ,'background-color': '#ffffff',
              'background-image': 'linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%)' }}>
            <Card.Link href="/shopping">
         <Card.Img variant="top" src={Image2} />
          <Card.Body>
          <Card.Title>
            <h2 className="display-4" style={{fontSize:'2.00rem'}}><b>SHOPPING</b></h2>
          </Card.Title>

          </Card.Body>
          </Card.Link>
          </Card>
          <br/>
          <Card style={{ width: '14rem','margin':'20px','padding':'2%','background-color': '#ffffff',
              'background-image': 'linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%)' }}>
            <Card.Link href="/printing">
         <Card.Img variant="top" src={Image1} />
          <Card.Body>
          <Card.Title>
          <h2 className="display-4" style={{fontSize:'2.00rem'}}><b>PRINTING</b></h2>
          </Card.Title>
          </Card.Body>
          </Card.Link>
          </Card>
<br/>

          <Card style={{ width: '14rem','margin':'20px' ,'padding':'2%' ,'background-color': '#ffffff',
              'background-image': 'linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%)' }}>
            <Card.Link href="/home">
         <Card.Img variant="top" src={Image3} />
          <Card.Body>
          <Card.Title>
          <h2 className="display-4" style={{fontSize:'2.00rem'}}><b>PDF TOOL</b></h2>
          </Card.Title>
      
          </Card.Body>
          </Card.Link>
          </Card>
          </CardGroup >
          </div>
         
        </div>
      </div>
    </Router>
  )
}
