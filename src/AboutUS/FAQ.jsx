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
              className="d-block w-100"
              src={Image}
              alt="grey"
              height="450px"
              width="300px"
            />
          </div>
          <div className="col-md-4">
            <div className="choose-title">
              <h2>Frequently Ask Question</h2>
            </div>
            {FaqData.map((e) => {
              return (
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>{e.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
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
              className="d-block w-100"
              src={Image2}
              alt="grey"
              height="450px"
              width="500px"
              className="target-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
