import React from 'react'
import {Box, makeStyles,Typography} from '@material-ui/core';
import logo from '../images/bg.jpg';
import Form from './Form';

//this is how to use css in material ui 


const useStyles=makeStyles({
//   this is a class 
     component:{ //object type
       height:'100vh',
       display:'flex',
       alignItems:'center',
       width:'65%',
       margin:'0 auto'
     },
     leftcontainer:{
        backgroundImage:`url(${logo})`,
        height:'80%',
        width:'30%',
        backgroundSize:'cover',
        borderRadius:' 20px 0 0 20px'
        
    },
    rightcontainer:{
        background:'linear-gradient(to right,#e74c3c,#e67e22)',
        height:'80%',
        width:'70%'
    }
})

const Weather = () => {
    const classes=useStyles();
    return (
       <Box className={classes.component}>
           <Box className={classes.leftcontainer}></Box>
           <Box className={classes.rightcontainer}>
               <Form />
           </Box>
       </Box>
    )
}

export default Weather;
