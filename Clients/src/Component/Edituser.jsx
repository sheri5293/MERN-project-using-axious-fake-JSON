import { FormGroup, FormControl, InputLabel, Input, Button,makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getUsers, editUsers } from '../Services/api';
import {useHistory, useParams} from 'react-router-dom'; // param passing id from url to get user detail
const useStyle=makeStyles({
    container:{
        width:'50%',
        margin:"5% 0 0 25% ",
        '& > * ':{
            marginTop:20
        }
    }

})
// this is object ... when we fill form detail then we will sotred all data in object and object will be stored in database//
const initialValues={
    name: "",
    password:"",
    email:"",
    phone:""
}
const Edituser = () => {
    const [user, setUser]=useState(initialValues)   //using hoook
const {name, password,email,phone}=user;  // object destructing
const {id} = useParams();    
const classes = useStyle();
const history = useHistory();

useEffect(()=>{
loadUserData();

},[]);
const loadUserData=async()=>{
    const reponce=await getUsers(id);
    setUser(reponce.data);

}


    const onValueChange=(e)=>{
setUser({...user,[e.target.name]:e.target.value})
    }
//from put api
    const EdituserDetail=async()=>{
      await editUsers(id,user);
      history.push('/Users')
    }
      return (
    <FormGroup className={classes.container}>
    <Typography variant='h4'>Edit Users</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input value={name} onChange={(e)=> onValueChange(e)} name="name" />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input value={email} onChange={(e)=> onValueChange(e)} name="email" />
      </FormControl>
      <FormControl>
        <InputLabel>password</InputLabel>
        <Input value={password} onChange={(e)=> onValueChange(e)} name="password" />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input value={phone} onChange={(e)=> onValueChange(e)} name='phone' />
      </FormControl>
      <Button variant='contained' onClick={()=>EdituserDetail()} color="primary">Edit User</Button>
    </FormGroup>
  );
};

export default Edituser;
