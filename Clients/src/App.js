import React from 'react';
import {Route,Switch} from 'react-router-dom'; // for used to which page show //

import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Users from './Component/Users';

import Add from './Component/Add';
import Error404 from './Component/Error404';
import Edituser from './Component/Edituser';



const App = () => {                      // Route is used to which page show //
                                          // exact is used to which page show //
  return (
    <>
        <Navbar/>    
<Switch>
        <Route exact path='/'>                     
        <Home/>
        </Route>

        <Route path='/Users'>
        <Users />
        </Route>

        <Route path='/Add'>
        <Add />
        </Route>
        <Route  path='/Edituser/:id'>
            <Edituser/>
        </Route>
        <Route>
        <Error404/>
        </Route>
        </Switch>  
         
        
    </> 
  );
};

export default App;
