
import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton'
import Snackbar from '@mui/material/Snackbar';

import { GoogleAuthProvider } from 'firebase/auth'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

import SignIn from './SignIn'
import SignUp from './SingUp';
import { validEmail } from './helper';
import { useAuth } from '../context/context';
import { Alert } from '@mui/material';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Login({
  changeModalState,
  open,
}){
  const { firebaseAuth, register, firebaseLogin, setUserName } = useAuth() 
  let [toast, setToast] = useState(false)
  let [isSubmitting, setIsSubmitting] = useState(false)
  let [signup, setSignup] = useState(false)
  let [values, setValues] = useState({showPassword: false, password: "", email: "", confirm_password: "", userName: ""})
  let [errors, setErrors] = useState({
    shortPassword: false,
    emailValid: false,
    confirmPassword: false,
    userNameValid: false
  })
  let [toastMessage, setToastMessage] = useState({severity: "success", message: ""})
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false,
    },
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    if (!validEmail(values.email)){
      errors.emailValid = true
      return
    }
    if (signup) {
      try {
        let res = await register(values.email, values.password)
        let userName = await setUserName(values.userName)
        setToast(true)
        setToastMessage({severity: "success", message:"registration successfull check your email to confirm"})
      }
      catch (e) {
        setToast(true)
        setToastMessage({severity: "error", message: e.message})
      } 
      finally {
        setIsSubmitting(false)
      }
    } else {
      try {
        let res = await firebaseLogin(values.email, values.password)
        setToast(true)
        setToastMessage({severity: "success", message:"Logged in successfully"})
      }
      catch (e) {
        setToast(true)
        setToastMessage({severity: "error", message: e.message})
      } 
      finally {
        setIsSubmitting(false)
      }      
    }
  }

  const setEmail = (e) => {
    setValues({
      ...values,
      email: e.target.value
    })
  }

  const setPassword = (e) => {
    e.target.value.length < 8? setErrors({...errors, shortPassword: true}): setErrors({...errors, shortPassword: false})
    setValues({
      ...values,
      password: e.target.value
    })
  }

  const setConfirmPassword = (e) => {
    if (e.target.value !== values.password) {
      errors.confirmPassword = true
    }else {
      errors.confirmPassword = false
    }
    setValues({
      ...values,
      confirm_password: e.target.value
    })
  }

  const setName = (e) => {
    setValues({...values, userName: e.target.value})
  }

  const handleClose = () => {
    setToast(false)
  }
  return(
    <Box>
      <Modal
        open = {open}
        onClose = {changeModalState}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Sign in with
          </Typography>
          <StyledFirebaseAuth uiConfig = {uiConfig} firebaseAuth = {firebaseAuth} />
          <hr />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Sign {signup?"up":"in"} With Email & Password
          </Typography>
          <Box 
            component = "form"
            sx = {{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
            onSubmit = {e => handleOnSubmit(e)}
          >
            {
              signup ? 
                <SignUp 
                  setName = {setName}
                  values = {values} 
                  setEmail = {setEmail} 
                  setPassword = {setPassword}
                  setConfirmPassword = {setConfirmPassword} 
                  errors = {errors}
                />
                : 
                <SignIn 
                  values = {values} 
                  setEmail = {setEmail} 
                  setPassword = {setPassword}
                  errors = {errors}
                /> 
            }
            <LoadingButton 
              sx = {{width: "75%", marginBottom:"10px", marginTop: '10px'}}
              loading = {isSubmitting} 
              type = "submit" 
              variant = "outlined"> {signup? "Sign Up": "Sign In"}</LoadingButton> 
          </Box>
          <a href = "#" onClick = {e => setSignup(!signup)}>{signup?"Sign in with email & password":"Don't have a account create account instead"}</a>
        </Box>
      </Modal>      
      <Snackbar
       anchorOrigin= {{vertical: 'bottom', horizontal: 'center'}}
        open={toast}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose = {handleClose} severity = {toastMessage.severity} sx = {{width: '100%'}}>
          {toastMessage.message}
        </Alert>
      </Snackbar>
    </Box>
  )
}