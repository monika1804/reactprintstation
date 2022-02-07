import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './About.css';
import Image from '../images/faq2.jpg'
import Image2 from '../images/target.jpg'
import FaqData from './FaqData.js';

export default function SimpleAccordion() {
  return (
    <div>
      <div className="faq-container">
        <div className="row">
          <div className="col-md-4">
            <img
              className="d-block w-100 faqimage"
              src={Image}
              alt="grey"
              height="400px"
         
            />
          </div>
          <div className="col-md-4">
            <div className="choose-title">
              <h1>Frequently Ask Question</h1>
            </div>
            {FaqData.map((e) => {
              return (
                <Accordion  style={{'border-radius':'10px',textAlign:'center'}}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon  style={{'background':'lightgrey','color':'white','border-radius':'100%',fontSize:'18px'}} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography style={{ fontWeight: 'bold', }}>{e.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails style={{ textAlign: 'left', }}>
                    <Typography>
                      {e.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </div>
          <div className="col-md-4">
            <img
              className="d-block w-100 faqimage"
              src={Image2}
              alt="grey"
              height="400px"
            
            />
          </div>
        </div>
      </div>
    </div>
  );
}
