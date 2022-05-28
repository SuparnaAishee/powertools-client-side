import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useOrders from '../../hooks/useOrders';

const MyOrder = () => {

   const [orders, setOrders] = useOrders([]);
   const [user] = useAuthState(auth);
   const email = user?.email;

    
   const selectedOrder = orders.filter( o => {
       console.log(o.Email);
       if( o.Email === email ){
           return o ;
       }
   } ); 
//    console.log(orders);
//    console.log(selectedOrder);

    const handleDeleteOrder = (id) => {
        // console.log(id);
        const proceed = window.confirm('Are you sure delete this item ?');
        if (proceed) {
            const url = `https://mysterious-forest-77053.herokuapp.com/orderDetails/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining);
                                          
                })

        }

    }
    return (
        <div className='mt-22'>
            <h1 className='text-center text-2xl font-bold text-orange-400'>My Orders</h1>
            <div class=" mt-5 overflow-x-auto">
                <table class="table w-full">
                    <thead>
                      
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>User Name</th>
                            <th>Status</th>
                            <th>Pay button</th>
                            <th>Delete Order</th>
                        </tr>
                     
                    </thead>
                    <tbody>
                        {
                            selectedOrder.map((order, index) =>
                               
                                    <tr>
                                        <td>{index+1} </td>
                                        <td>{order.Name}</td>
                                        <td>{user.email}</td>
                                        <td>Pending..</td>
                                        <td><button  className='bg-green-400 text-white p-2 rounded-2xl'>Payment</button></td>
                                        <td><button onClick={() => handleDeleteOrder(order._id)} className='bg-red-400 text-white p-2 rounded-2xl'>Delete Order</button></td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyOrder;