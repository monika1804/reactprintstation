import * as React from 'react';
import { makeStyles } from '@mui/styles';
// import { CssBaseline } from '@mui/material';
// import { Background } from '../images/background';
import './Home.css';
import { Typography, Grid } from '@mui/material';
import Logo from '../images/lockup-white.png';

const useStyles = makeStyles((theme) => ({
  Content: {
    margin: '200px',

  },
  header: {
    fontSize: '75px',
    color: 'white',
    fontFamily: 'sans-serif',
  },
  tagline: {
    fontSize: '30px',
    color: 'white',
  }
}));

export default function MyComponent() {
  const classes = useStyles();
  return (
    <div class="jumbotron jumbotron-full-bg">
      <Grid xs={12} classes={classes.Content}>
        <Grid xs={6}>
          <h1 className={classes.header}><strong>The Print Station</strong></h1>
          <Typography variant="h6" className={classes.tagline}>Make Students Life Easy</Typography>
        </Grid>
        <Grid xs={6}>
          {/* <img src={Logo} alt="logo" style/> */}
        </Grid>
      </Grid>
    </div>

  );
}