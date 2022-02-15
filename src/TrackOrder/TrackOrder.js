import { Button } from '@mui/material'
import React from 'react'


export default function TrackOrder() {
  const handleClick = () => {
    var options = {
      "key": "rzp_test_OsiOC6U8NK4oTU", // Enter the Key ID generated from the Dashboard
      "amount": "100", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Print Station",
      "description": "Print Station Tx",
      //"image": "https://example.com/your_logo",
      "order_id": "order_IcwQ6GPtFPIC4v", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": function (response){
          alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature)
      },
      "prefill": {
          "name": "Gaurav Kumar",
          "email": "gaurav.kumar@example.com",
          "contact": "9999999999"
      },
      "notes": {
          "address": "Razorpay Corporate Office"
      },
      "theme": {
          "color": "#3399cc"
      }
  };
  let rzp1 = new window.Razorpay(options);
  rzp1.open()
  }
  return (
    <div>
      <Button variant='outlined' onClick = {e => handleClick()}>Test</Button>
    </div>
  )
}
