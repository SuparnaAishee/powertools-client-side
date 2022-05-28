import React from 'react';
import { toast } from 'react-toastify';

const AllUsers = ({ user, index }) => {
    const {email, role} = user;



    const makeAdmin = () => {
        const url = `https://mysterious-forest-77053.herokuapp.com/user/admin/${email}`
        fetch(url,  {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => {res.json()})
            .then(data => {})
    }



 
    const handleDeleteUser = () => {

    }


    return (
       
            <tr>
                <td>{index + 1} </td>
                <td>{email}</td>
                <td>{role !== 'admin' && <button onClick={makeAdmin}  className='bg-green-400 text-white p-2 rounded-2xl'>Make Admin</button>}</td>
                <td><button onClick={() => handleDeleteUser(user._id)} className='bg-red-400 text-white p-2 rounded-2xl'>Delete User</button></td>
            </tr>
    );
};

export default AllUsers;