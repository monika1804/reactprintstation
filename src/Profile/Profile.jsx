import { Divider, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Form, Row, Col, Button, Card, Toast } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { useAuth } from '../context/context';
import CustomToast from '../utils/Toast';
import "./profile.css"

export default function Profile() {
  let { userProfile, addDataToDb, firebaseAuth } = useAuth()
  const [firstName, setFirstName] = useState(userProfile.firstName); //Next dev, this will always show display name even if we update first name XD
  const [lastName, setLastName] = useState(userProfile.lastName)
  const [email, setEmail] = useState(userProfile.email) //Same Here; fix this ;_;
  const [phone, setPhone] = useState(userProfile.phone);
  const [address, setAddress] = useState(userProfile.address);
  const [city, setCity] = useState(userProfile.city);
  const [state, setState] = useState(userProfile.state);
  const [pincode, setPincode] = useState(userProfile.pincode);
  const [formError, setFormError] = useState([]);
  const [toast, setToast] = useState({
    show: false,
    message: "",
    severity: "success"
  })
  
  useEffect(()=>{
    setFirstName(userProfile.firstName)
    setEmail(userProfile.email)
    setLastName(userProfile.lastName)
    setPhone(userProfile.phone)
    setAddress(userProfile.address)
    setCity(userProfile.city)
    setState(userProfile.state)
    setPincode(userProfile.pincode)
  }, [userProfile])

  if(!firebaseAuth.currentUser){
    return(<Redirect to = "/home" />)
  }
  
  const handleSignUpClick = async (e) => {
    e.preventDefault()
    const errors = [];
    if (firstName === "") {
      errors.push("name");
    }
    if (email === "") {
      errors.push("email")
    }
    if (phone === "") {
        errors.push("phone")
      }
    if (address === "") {
      errors.push("address");
    }
    if (state === "") {
      errors.push("state");
    }
    if (city === "") {
      errors.push("city");
    }
    if (pincode === "") {
      errors.push("pincode");
    }
    setFormError(errors);
    if(formError.length === 0) {
      console.log("we in here", userProfile)
      let userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        address: address,
        state: state,
        city: city,
        pincode: pincode
      }
      try{
        await addDataToDb("userMetadata", userData)
        setToast({
          show: true,
          message: "profile sucessfully updated",
          severity: "success"
        })
      }
      catch (e) {
        setToast({
          show: true,
          message: "could not update profile" + e.message,
          severity: "error"
        })
      }
    }
  }
  return (
    <div>
      <Card className="login-card" style={{'margin':'auto','width':'50%',marginTop:'50px'}}>
        <Form onSubmit = {e => handleSignUpClick(e)}>
          <h3><b>Profile Page</b></h3>
          <Divider />
          <div className="form-content">
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <TextField placeholder="Enter the First Name"
                  fullWidth
                  size="small"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  error={formError.includes("name")}
                  helperText={
                    formError.includes("name") ? "First Name is Required" : ""
                  }
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <TextField placeholder="Enter the Last Name"
                  fullWidth
                  size="small"
                  value = {lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <TextField type="email" placeholder="Enter Email Address"
                fullWidth
                size="small"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={formError.includes("email")}
                helperText={
                  formError.includes("email") ? "Email is Required" : ""
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <TextField type="tel" placeholder="Enter Phone Address"
                fullWidth
                size="small"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                error={formError.includes("phone")}
                helperText={
                  formError.includes("phone") ? "Phone is Required" : ""
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <TextField placeholder="House No., street, or floor"
                fullWidth
                size="small"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                error={formError.includes("address")}
                helperText={
                  formError.includes("address") ? "Field is Required" : ""
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <TextField placeholder="Landmark, P.O"
                fullWidth
                size="small"
              />
            </Form.Group>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <TextField placeholder="Enter your City"
                  fullWidth
                  size="small"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  error={formError.includes("city")}
                  helperText={
                    formError.includes("city") ? "Field is Required" : ""
                  }
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
                <TextField placeholder="Enter state"
                  fullWidth
                  size="small"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  error={formError.includes("state")}
                  helperText={
                    formError.includes("state") ? "Field is Required" : ""
                  }
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <TextField placeholder="Enter your Area Pincode"
                  fullWidth
                  size="small"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  error={formError.includes("pincode")}
                  helperText={
                    formError.includes("pincode") ? "Field is Required" : ""
                  }
                />
              </Form.Group>
            </Row>
            <Row>
              <Button variant="primary" type = "submit">
                Save
              </Button>
            </Row>
          </div>
        </Form>

      </Card>
      <CustomToast
          open = {toast.show}
          handleClose = {e => () => setToast({...toast, show: false})} //wow how did i do this lmao XD
          message = {toast.message}
          severity= {toast.severity}
        />
    </div>
  )
}