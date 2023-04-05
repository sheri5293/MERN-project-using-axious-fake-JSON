import axios from 'axios';       // axios is new method of fetch api//

const url='http://localhost:3001/users';

export const getUsers=async(id)=>{
    id = id || '';
    return await axios.get(`${url}/${id}`);
}

//POST API
export const postUsers=async(user)=>{         //values in parameter comes from frontend
    return await axios.post(url,user) ;     
}               

// update data
export const editUsers=async(id,user)=>{
return await axios.put(`${url}/${id}`,user);
}

export const deleteUser=async(id)=>{
    return await axios.delete(`${url}/${id}`);
}