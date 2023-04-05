import { Table, TableBody, TableCell, TableRow,TableHead,makeStyles, Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getUsers,deleteUser} from '../Services/api';
import {Link } from 'react-router-dom';

const useStyle = makeStyles({
  table:{
    width:'90%',
    margin:'50px 0 0 50px' 

  },
  thead:{            // this & > * apply on child parent class in css// 
    '& > *':{
      background:"black",
      color:"white",
      fontsize:"20"
    }
  },
  row:{
    '& >*':{
      fontsize:20
    }
  }
})

const Users = () => {
  // using hook//

  const [users, setUsers] = useState([]);
const classes = useStyle();
  useEffect(() => {
    // render component without click somewhere when page open componenet render [] only first time//
    getAllUsers();
  }, []);

  // get from api
  const getAllUsers = async () => {
    const responce = await getUsers();
    console.log(responce.data); // data comes when we console then array will be store in data name storage//
    setUsers(responce.data);
  };

//deltete user api
const deleteUserData = async (id) => {
  await deleteUser(id);
  getAllUsers();
}
  

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow className={classes.thead}>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Password</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map(
          (
            user //map function is to get all values in table//
          ) => (
            <TableRow className={classes.row}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.password}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell><Button variant='contained' color='primary' style={{marginRight:10}} component={Link} to={`/Edituser/${user.id}`}>Edit</Button>
              <Button variant='contained' color="secondary" onClick={()=>deleteUserData(user.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          )
        )}
      </TableBody>
    </Table>
  );
};

export default Users;
