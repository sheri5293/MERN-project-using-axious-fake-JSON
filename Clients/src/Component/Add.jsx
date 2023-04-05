import { FormGroup, FormControl, InputLabel, Input, Button,makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { postUsers } from '../Services/api';
import {useHistory} from 'react-router-dom';
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
const Add = () => {
    const [user, setUser]=useState(initialValues)   //using hoook
const {name, password,email,phone}=user;  // object destructing
    const classes = useStyle();
const history = useHistory();
    const onValueChange=(e)=>{
setUser({...user,[e.target.name]:e.target.value})
    }

    const AdduserDetail=async()=>{
      await postUsers(user);
      history.push('/Users')
    }
      return (
    <FormGroup className={classes.container}>
    <Typography variant='h4'>Add Users</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e)=> onValueChange(e)} name="name" />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e)=> onValueChange(e)} name="email" />
      </FormControl>
      <FormControl>
        <InputLabel>password</InputLabel>
        <Input  onChange={(e)=> onValueChange(e)} name="password" />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e)=> onValueChange(e)} name='phone' />
      </FormControl>
      <Button variant='contained' onClick={()=>AdduserDetail()} color="primary">Add User</Button>
    </FormGroup>
  );
};

export default Add;
