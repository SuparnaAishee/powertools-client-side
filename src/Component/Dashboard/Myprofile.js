import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import userImage from '../../assets/user.png'
const Myprofile = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    return (
        <div className=' flex justify-center items-center'>
            <div class="card w-80 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={userImage} alt="" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h1 className='text-xl font-bold text-center'>My profile</h1>
                    <h1 className='text-xl font-bold text-center pl-0 '>{user.email}</h1>
                    {
                        admin && <h1 className='text-xl font-bold text-center pl-0 text-orange-400'> Admin </h1>
                    }
                </div>
            </div>
        </div>
    );
};

export default Myprofile;