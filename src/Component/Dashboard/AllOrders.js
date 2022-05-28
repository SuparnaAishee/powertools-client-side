import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AllOrders = () => {


    const [allOrders, setAllOrders] = useState([]);
    const [user] = useAuthState(auth);
    const email = user?.email;
    console.log(allOrders);
    useEffect(() => {
            fetch(`https://mysterious-forest-77053.herokuapp.com/orderDetails`)
                .then(res => res.json())
                .then(data => setAllOrders(data))
        }, [])


    return (
        <div className='mt-22'>
        <h1 className='text-center text-2xl font-bold text-orange-400'>All Orders</h1>
        <div class=" mt-5 overflow-x-auto">
            <table class="table w-full">
                <thead>
                  
                    <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th>User Email</th>
                        <th>Status</th>
                        {/* <th>Pay button</th> */}
                        {/* <th>Delete Order</th> */}
                    </tr>
                 
                </thead>
                <tbody>
                    {
                        allOrders.map((order, index) =>
                        <tr>
                            <td className='text-orange-400 '>{index+1} </td>
                            <td>{order.Name}</td>
                            <td>{order.Email}</td>
                            <td className='text-green-500 '> payment Pending..</td>
                            {/* <td><button  className='bg-green-400 text-white p-2 rounded-2xl'>Payment</button></td> */}
                            {/* <td><button onClick={() => handleDeleteOrder(order._id)} className='bg-red-400 text-white p-2 rounded-2xl'>Delete Order</button></td> */}
                        </tr>
                               
                        )
                    }
                </tbody>
            </table>
        </div>

    </div>
           
        
    );
};

export default AllOrders;