import React from 'react'
import { Box,makeStyles,Typography } from '@material-ui/core';
import download from '../Assets/images/download.jpg';
import downloads from '../Assets/images/Labs.jpg';

const useStyles = makeStyles({  
  image:{
width:'50%',
height:'50%'
  },
  component:{
    margin:50 
  }
  });

  //Box by default give div //

const Home = () => { 
const classes = useStyles();
  return (
    <Box className={classes.component}>
    <Typography variant='h4' style={{marginBottom:50}}>Code for Logic</Typography>
<Box style={{display:'flex'}}> 
<img className={classes.image} src={download} alt="download"  />
<img className={classes.image} src={downloads} alt="downloads"  />
    </Box>
    </Box>
  )
}

export default Home;