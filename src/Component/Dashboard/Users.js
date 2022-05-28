import React, { useEffect, useState } from 'react';
import AllUsers from './AllUsers';

const Users = () => {
    const [users, setUsers ] = useState([]);
    
    // console.log(email);
    useEffect(()=>{
        fetch(`https://mysterious-forest-77053.herokuapp.com/users`)
            .then(res => res.json())
            .then(data => setUsers(data));
} , [])



    return (
        <div className='mt-22'>
            <h1 className='text-center text-2xl font-bold text-orange-400'>All User</h1>
            <div class=" mt-5 overflow-x-auto">
                <table class="table w-full">
                    <thead>
                      
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Delete User</th>
                        </tr>
                     
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <AllUsers key={user._id} user={user} index={index}></AllUsers>                            )
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Users;