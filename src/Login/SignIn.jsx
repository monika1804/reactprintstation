import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FormControl, InputAdornment, IconButton, TextField } from '@mui/material';
import Box from '@mui/material/Box';

export default function SignIn({
  errors,
  values,
  setEmail,
  setPassword
}) {
  let [showPassword, setShowPassword] = useState(false)

  return(
    <Box sx = {{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <FormControl sx={{ m: 1, width: '25ch' }}>
        <TextField
          error = {errors.emailValid}
          helperText = {errors.emailValid? "please enter valid email address": ""}
          required = {true}
          id = "standard-email"
          type = "email"
          value = {values.email}
          onChange = {e => setEmail(e)}
          label = "Email"
          size = "small"
          variant = "standard"
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: '25ch' }}>
      <TextField
        required = {true}
        variant = "standard"
        id = "adornment-password"
        type = {showPassword? 'text': 'password'}
        value = {values.password}
        onChange = {e => setPassword(e)}
        InputProps = {{
          endAdornment:
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={e => setShowPassword(!showPassword)}
              onMouseDown={e => e.preventDefault()}
              edge="end"
            >
              {values.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }}
        label = "Password"
        size = "small"
        />
      </FormControl>
    </Box>
  )
}
