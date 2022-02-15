import { Alert, Snackbar } from "@mui/material";

export default function CustomToast({
  open,
  handleClose,
  message,
  severity
}){
  return(
    <Snackbar
    anchorOrigin= {{vertical: 'bottom', horizontal: 'center'}}
     open={open}
     autoHideDuration={6000}
     onClose={handleClose()}
   >
     <Alert onClose = {handleClose()} severity = {severity} sx = {{width: '100%'}}>
       {message}
     </Alert>
   </Snackbar>
  )
}