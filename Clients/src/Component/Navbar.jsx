import react from 'react';
import { AppBar, Toolbar,Typography,makeStyles } from '@material-ui/core';
import {NavLink} from 'react-router-dom';


const useStyles = makeStyles({    
header:{
    backgroundColor:'black'
},
tabs:{
    color:'white',
    textDecoration:'none',
    marginRight:20,
    fontsize:40,
}
});


const Navbar = () => {
    const classes=useStyles();

  return (
<AppBar className={classes.header} position='static'>
    <Toolbar>
<NavLink  className={classes.tabs} to ='/' exact> Code With Us</NavLink>
<NavLink className={classes.tabs}  to ='/Users'> Users</NavLink>
<NavLink className={classes.tabs}  to ='/Add'> Add</NavLink>
    </Toolbar>
</AppBar>
  )
}

export default Navbar;