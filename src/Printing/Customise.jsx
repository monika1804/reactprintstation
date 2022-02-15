import { Button, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';
import React, { useState } from 'react'
import ButtonGroup from '@mui/material/ButtonGroup';
import { Box } from '@mui/system';
import { useAuth } from '../context/context';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { generateNewKey } from '../utils/utils';
import CustomToast from '../utils/Toast';
import FileUploadIcon from '@mui/icons-material/FileUpload';
export default function Customise({numPage, fileName}) {
  let { addDataToDb, getDbRef, firebaseAuth, cartData } = useAuth()
  const [toast, setToast] = useState({
    show: false,
    message: "",
    severity: "success"
  })
  const [metadata, setMetadata] = useState({
    quantity: 1,
    colored: true,
    single: true,
    bind: true,
    numPage: numPage
  })
  const pricing = {
    "colored": 5,
    "bw": 3,
    "single": 4,
    "double": 5
  }

  const calculatePrice = ()=>{
    let clr = metadata.colored?"colored":"bw"
    let side = metadata.single?"single":"double"
    let bindPrice = metadata.bind ? 3 : 1
    return ((pricing[clr] * pricing[side] * metadata.numPage * bindPrice) * metadata.quantity)
  }

  const handleButtonClick = async () =>{
    metadata.fileName = fileName
    const cartItem = {
      price: calculatePrice(),
      product: "print",
      quantity: metadata.quantity,
      metadata: metadata
    }
    let key = generateNewKey(getDbRef(`users/${firebaseAuth.currentUser.uid}/cart`))
    await addDataToDb(`cart/${key}`, cartItem)
    setToast({show: true, message: "item added sucessfully to cart", severity: "success"})
  }
  return (
    
    fileName == ""?
  

    <Box sx = {{display: "flex", justifyContent: "center", alignItems: "center"}}>
 <FileUploadIcon style={{fontSize:'6.00rem',color:'#a00000',}}/>
      <Typography variant = "h3" class="display-4" style={{fontSize:'3vw',marginRight:'8vw'}}>
        Please Upload <br/>Or<br/> Select a File
      </Typography>
    </Box>
    :
    <div>
        <div>
          <h4>Choose the option given below for {fileName}:</h4>
        </div>
        <Box sx = {{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
          <ButtonGroup class = "color-select">
            <Button id = {"cs_active_"+!metadata.colored} onClick = {e => setMetadata({...metadata, colored: false, price: calculatePrice()})} > B&W Print </Button>
            <Button id = {"cs_active_"+metadata.colored} onClick = {e => setMetadata({...metadata, colored: true, price: calculatePrice()})}> Coloured Print </Button>
          </ButtonGroup>
          <br />
          <ButtonGroup class = "side-select">
            <Button id = {"cs_active_"+metadata.single} onClick = {e => setMetadata({...metadata, single: true, price: calculatePrice()})}> Single side Print </Button>
            <Button disabled = {numPage == 1} id = {"cs_active_"+!metadata.single} onClick = {e => setMetadata({...metadata, single: false, price: calculatePrice()})}> Double side Print </Button>
          </ButtonGroup>
          <br />
          <FormGroup sx = {{display: "block"}}>
            <FormControlLabel labelPlacement="start" control={<Checkbox checked = {metadata.bind} onClick = {e => setMetadata({...metadata, bind: !metadata.bind, price: calculatePrice()})}/>} label = {<Typography variant='body1'>Spiral Bind This File?</Typography>} />
          </FormGroup>
        <Box component = "hr" sx = {{width: "100%"}} />
        <Box>
          <span>Number of copies</span>
          <Button onClick = {e => setMetadata({...metadata, quantity: metadata.quantity + 1})}>+</Button>
          {metadata.quantity}
          <Button onClick = {e => setMetadata({...metadata, quantity: Math.max(1 ,metadata.quantity - 1)})}>-</Button>
        </Box>

        <div>
          total price : {calculatePrice(numPage)}
        </div>
        <Button endIcon = {<ShoppingCartIcon />} variant = "contained" onClick = {e => handleButtonClick(e)}>Add To Cart</Button>
        </Box>
        <CustomToast
          open = {toast.show}
          handleClose = {e => () => setToast({...toast, show: false})} //wow how did i do this lmao XD
          message = {toast.message}
          severity= {toast.severity}
        />
    </div>
   
    
  )

}