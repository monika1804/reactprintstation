import React, { useState } from 'react';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import DeleteIcon from '@mui/icons-material/Delete';
import Footer from '../Footer/Footer';
function OurCompany() {
    return ( <div>
        <br/>
        <br/>
        <div style={{'border':'1px solid gray','border-radius':'10px','width':'50%','margin':'auto','padding':'2%','box-shadow':'5px 5px 5px 5px rgba(0,0,0,0.253)'}}>
        <a href="/profile">< AddBusinessIcon style={{'font-size':'80px'}}/></a>
            <h4>Add an address to see available<br/> delivery options</h4>
        </div>
        <br/>
        <br/>


        <div style={{'margin':'auto','width':'50%'}}>
       <span>Units:</span>  <button  style={{'border-radius':'100%'}} type="button" class="btn btn-danger">-</button> &nbsp;
        <input type="number" style={{'text-align':'center','outline':'none'}}/>&nbsp;
        <button  style={{'border-radius':'100%'}} type="button" class="btn btn-success">+</button>
        <a href="#"><DeleteIcon style={{'color':'#df3b38','margin-left':'10%'}}/></a>
        </div>
        <br/>

     <div style={{'padding':'2%','width':'50%','margin':'auto'}}>
         <div class="pricedetails" style={{'text-align':'left'}}>
         <p>PRICE DETAILS</p>
         <hr/>
         <p>Price(items)</p>
         <p>Discount</p>
         <p>Delivery Charge</p>
         <hr/>
        <h5> Total Amount</h5>
         <hr/>
         </div>
         </div> 
 
<br/>

<a href="/"><button type="button" class="btn btn-light">BACK</button></a>
        <button type="button" class="btn btn-primary">Proceed To Pay</button>

        <br/> <br/><br/> <br/><br/> <br/>


        <div xs={12} className="footer">
        <Footer />
      </div>
    </div>
   
       
    )
}

export default OurCompany