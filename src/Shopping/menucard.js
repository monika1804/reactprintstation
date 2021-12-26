import React from 'react'
import bookstore from './book_data';
import './shopping.css';
import {BrowserRouter as Router,Switch,Link} from "react-router-dom";
import Card from "react-bootstrap/Card";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography, { typographyClasses } from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
 
function Users(){
    
return(
    <div class="container-fluid">
  
    

  

<div class="back-shop-content">
<h1 style={{'color':'#344850'}}>The <span style={{'color':'#df3b38'}}>Print</span> Station</h1><br/>
<h3 style={{'color':'#344850'}}>What Would You Like To Purchase Today?</h3>
<h5 style={{'color':'#5d6a6d'}}>We Somehow Have The Best Stationary On The Market.</h5>
</div>

<br/><br/>

<div>

<Accordion style={{'width':'50%','margin':'auto','border':'3px solid #b3e5fc','border-radius':'12px'}}>
<AccordionSummary expandIcon={<ExpandMoreIcon style={{'background':'grey','color':'white','border-radius':'100%'}}/>}> 
<Typography style={{'margin':'auto'}}>
  

<h4 style={{'color':'#0e73b0'}}>Diary, Planner & Journal</h4>
<h6 style={{'color':'#ababab'}}>LOG & schedule your life events or just
scribble around with new ideas</h6>
</Typography>
</AccordionSummary>

<div class="row printcategory">
<div class="col-md-6"><a href="/planners"><img src="image/book2.jpg" class="book-image3"/><br/>
<h6 style={{'color':'black'}}>Daily Planners</h6><br/>
<h6 style={{'color':'#ababab'}}>Starts at 199.00</h6>
<h6 style={{'color':'green'}}>Up to 50% off</h6><br/></a></div>

<div class="col-md-6"><a href="/diary"><img src="image/diary205.png" class="book-image3"/><br/>
<h6 style={{'color':'black'}}>Diary</h6><br/>
<h6 style={{'color':'#ababab'}}>Starts at 299.00</h6>
<h6 style={{'color':'green'}}>Up to 60% off</h6></a></div>
</div>

</Accordion>
<br/><br/>


<Accordion style={{'width':'50%','margin':'auto','border':'3px solid #b3e5fc','border-radius':'12px'}}>
<AccordionSummary expandIcon={<ExpandMoreIcon style={{'background':'grey','color':'white','border-radius':'100%'}}/>}> 
<Typography style={{'margin':'auto'}}>
<h4 style={{'color':'#0e73b0'}}>Frame & Posters</h4>
<h6 style={{'color':'#ababab'}}>Create a wholesome world in your room with stunning posters & frames</h6>
</Typography>
</AccordionSummary>
<div class="row  printcategory">

<div class="col-md-4"><a href="/customizedframes"><img src="image/complete package_set.png" class="book-image3" />
<h6 style={{'color':'black'}}>Customised Frames</h6><br/>
<h6 style={{'color':'#ababab'}}>Starts at 349.00</h6>
<h6 style={{'color':'green'}}>Up to 33% off</h6><br/>
</a></div>
      
<div class="col-md-4"><a href="/motivationalposters"><img src="image/Main Image2.png" class="book-image3" />
<h6 style={{'color':'black'}}>Motivational Posters</h6><br/>
<h6 style={{'color':'#ababab'}}>Starts at 299.00</h6>
<h6 style={{'color':'green'}}>Up to 70% off</h6><br/>

</a></div>

<div class="col-md-4"><a href="/motivationalquoteframewithposters"><img src="image/set.jpg" class="book-image3" />
<h6 style={{'color':'black'}}>Motivational Quote Frame With Posters</h6>
<h6 style={{'color':'#ababab'}}>Starts at 299.00</h6>
<h6 style={{'color':'green'}}>Up to 70% off</h6>
</a></div>
  </div> 
  </Accordion>

  <br/><br/>


<Accordion style={{'width':'50%','margin':'auto','border':'3px solid #b3e5fc','border-radius':'12px'}}>
<AccordionSummary expandIcon={<ExpandMoreIcon style={{'background':'grey','color':'white','border-radius':'100%'}}/>}> 
<Typography style={{'margin':'auto'}}>
<h4 style={{'color':'#0e73b0'}}>Notebooks</h4>
<h6 style={{'color':'#ababab'}}>Beautiful customised spiral-bound notebooks</h6>
</Typography>
</AccordionSummary>
<div class="row  printcategory">
<div class="col-md-6"><a href="/customizebycover"><img src="image/cover.png" class="book-image3" />
<h6 style={{'color':'black'}}>Customize By Cover</h6><br/>
<h6 style={{'color':'#ababab'}}>Starts at 149.00</h6>
<h6 style={{'color':'green'}}>Up to 25% off</h6><br/></a></div>
      
<div class="col-md-6"><a href="/customizebyname"><img src="image/name1.png" class="book-image3" />
<h6 style={{'color':'black'}}>Customize By Name</h6><br/>
<h6 style={{'color':'#ababab'}}>Starts at 149.00</h6>
<h6 style={{'color':'green'}}>Up to 25% off</h6></a></div>
</div> 
</Accordion>
<br/><br/>

<Accordion style={{'width':'50%','margin':'auto','border':'3px solid #b3e5fc','border-radius':'12px'}}>
<AccordionSummary expandIcon={<ExpandMoreIcon  style={{'background':'grey','color':'white','border-radius':'100%'}}/>}> 
<Typography style={{'margin':'auto'}}>
<h4 style={{'color':'#0e73b0'}}>TPS Merchandise</h4>
<h6 style={{'color':'#ababab'}}>Amazing  branded merchandise by The Print Station</h6>
</Typography>
</AccordionSummary>
<div class="row  printcategory">

<div class="col-md-12"><a href="/tpsmerChandise"><img src="image/Tee2.jpg" class="book-image3" />
<h6 style={{'color':'black'}}>TPS Merchandise (Coming Soon)</h6><br/>
<h6 style={{'color':'white', 'background':'#0e73b0','border-radius':'20px','width':'50%','margin':'auto','padding':'2px'}}>Coming Soon</h6><br/>
</a></div>
</div> 
  
</Accordion> 
<br/><br/> 


</div>


















</div>

    )
}
export default Users;

/**/
