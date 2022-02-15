import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material';

import UploadedCards from './UploadedCards';
import Footer from '../Footer/Footer';
import Customise from './Customise';
import Uploader from './Uploader';
import { getNumPages } from '../utils/utils';
import { useAuth } from '../context/context';
import { Redirect } from 'react-router-dom';



export default function Printing() {
  let { firebaseAuth } = useAuth()
  const [file, setFile] = useState({fileName:"", numPage: 1})
  const [update, setUpdate] = useState(false)
  console.log(firebaseAuth.currentUser, !firebaseAuth.currentUser)
  if (!firebaseAuth.currentUser) {
    return (<Redirect to = "/printing" />)
  }


  return (
    <div className="text-center">
      <Box sx = {{backgroundColor:"lightgray", display: "flex", flexDirection: "column"}}>
         
         <div class="row p-4 m-auto w-40">
           <div class="col-4"> <img src="images/pdf.jpg" height="100" width="100" style={{boxShadow:'10px 5px 10px 5px gray'}}/></div>
         

         <div class="col-4"><img src="images/doc.jpg"height="100" width="100" style={{boxShadow:'10px 5px 10px 5px gray'}}/></div> 

         <div class="col-4"><img src="images/ppt.jpg"height="100" width="100" style={{boxShadow:'10px 5px 10px 5px gray'}}/></div> 

          </div>
          <h3 class="display-4 p-4"  style={{fontSize:'2.04rem'}}>Uploads Your File Here</h3>
        
          <UploadedCards update = {update} setFile = {setFile} />
      </Box>
      <br/><br/><br/><br/>

    
       
      <Box sx = {{display: "flex", justifyContent: "space-around", alignItems: "center"}}>
        <div className="uploader-container">
          <Uploader  update = {update} setUpdate = {setUpdate}/>
        </div>
        <Box sx = {{borderLeft: "2px dotted lightgray", height: "400px"}}/>
        <div>
          <Customise fileName = {file.fileName} numPage = {file.numPage}/>
        </div>
      </Box>

      <br/><br/><br/><br/>
      <div xs={12} className="footer">
        <Footer />
      </div>
    </div>
  )
}
