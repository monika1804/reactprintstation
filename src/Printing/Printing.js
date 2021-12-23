import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material';

import UploadedCards from './UploadedCards';
import Footer from '../Footer/Footer';
import Customise from './Customise';
import Uploader from './Uploader';
import { getNumPages } from '../utils/utils';



export default function Printing() {
  const [file, setFile] = useState({fileName:"", numPage: 1})
  const [update, setUpdate] = useState(false)



  return (
    <div>
      <Box sx = {{backgroundColor:"#6c757d", display: "flex", flexDirection: "column"}}>
          <h1>your upload</h1>
          <UploadedCards update = {update} setFile = {setFile} />
      </Box>
      <div className="uploader-container">
        <Uploader update = {update} setUpdate = {setUpdate}/>
      </div>
      <div className="file-selector">
        <Customise fileName = {file.fileName} numPage = {file.numPage}/>
      </div>
      <div xs={12} className="footer">
        <Footer />
      </div>
    </div>
  )
}
