import React, { useRef, useState, useEffect } from 'react'
import './Printing.css'
import Image2 from '../images/printicon2.png';
import { useAuth } from '../context/context';
import { Box, Button, LinearProgress } from '@mui/material';
import CustomToast from '../utils/Toast';
import { getNumPages, isFileTypeSupported } from '../utils/utils';


export default function Uploader({update, setUpdate}) {
  const { getRef, currentUser, uploadToFirebase, progress } = useAuth()
  const inputFileRef = useRef(null)
  const [file, setFile] = useState(undefined)
  const [fileUploading, setFileUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [toast, setToast] = useState({
    show: false,
    message: "",
    severity: "success"
  })
  console.log("heck ", progress)
  const handleUploadFile = async(e) => {
    setFileUploading(true)
    console.log("filename", e.target.files[0].name)
    let file = e.target.files[0]
    if (!isFileTypeSupported(file)) {
      setToast({
        show: true,
        message: "file type is not supported",
        severity: "error"
      })
      setFileUploading(false)
      e.target.value = null
      return
    }
    let metadata = {
      contentType: file.type,
      customMetadata:{
        fileName: file.name,
        numPage: await getNumPages(file)
      }
    }
    console.log("this is", metadata)
    let userRef = getRef(`${currentUser}/${file.name}`)
    let upload = uploadToFirebase(userRef, file, metadata)
    upload.on('state_changed', 
    (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setUploadProgress(progress)
    }, 
    (error) => {
      setFileUploading(false)
      // Handle unsuccessful uploads
    }, 
    () => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      // getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      //   console.log('File available at', downloadURL);
      // });
      setUpdate(!update)
      progress.setProgress(true)
      setFileUploading(false)
      e.target.value = null
      setToast({
        show: true,
        message: "file uploaded successfully",
        severity: "success"
      })
    }
  )  
  }

  return (
    <Box>
      <h3>Click to upload pdf/image/doc/pdf</h3>
      <Box sx = {{display: "flex", flexDirection: "row", justifyContent: "center", mt: "10px", mb: "10px"}}>
        <input 
          style= {{display: 'none'}}
          type = "file"
          accept = "image/*, .pdf, .pptx, .ppt"
          onChange = {e => {
            handleUploadFile(e)
          }}
          ref = {inputFileRef}
        />
        <Button disabled = {fileUploading} sx = {{width: "150px"}} variant = "contained" onClick = { e => inputFileRef.current.click()}>
          Upload
        </Button>
      </Box>
      <Box sx = {{width: "100%", display: fileUploading?"":"None"}}>
        <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
        <Box sx={{ width: '50%', mr: 1 }}>
          <LinearProgress variant="determinate" value = {uploadProgress} />
        </Box>
        <Box >
          {Math.ceil(uploadProgress)}%
        </Box>
      </Box>
      </Box>
      <CustomToast
        open = {toast.show}
        handleClose = {e => () => setToast({...toast, show: false})} //wow how did i do this lmao XD
        message = {toast.message}
        severity= {toast.severity}
      />
    </Box>
  )
}
