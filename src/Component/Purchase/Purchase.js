import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useProduct from '../../hooks/useProduct';
import useProductDetails from '../../hooks/useProductDetails';

const Purchase = () => {
    const { productId } = useParams();
    // console.log(productId);
    const [tool, setTool] = useProductDetails(productId);
    const [tools, setTools] = useProduct({});
    const singleProduct = tools.find(pd => pd._id === productId)
    const [user] = useAuthState(auth);
    const email = user?.email;
    // console.log(email);

    // console.log(singleProduct);
    const { _id, Image, Name, Price, Description, Quantity } = singleProduct || {};

    const [totalPrice, setTotalPrice] = useState();
    const [newQuantity, setNewQuantity] = useState(1);

    const handleIncrease = (event) => {
        const increase = newQuantity + 1;
        setNewQuantity(increase);
        const calculatePrice = parseFloat(Price) * increase;
        setTotalPrice(calculatePrice);
        // console.log(increase);
    }
    const handleDecrease = (event) => {
        const decrease = newQuantity - 1;
        setNewQuantity(decrease);
        const calculatePrice = parseFloat(Price) * decrease;
        setTotalPrice(calculatePrice);
        // console.log(decrease);
    }

    const handleOrderProduct = () => {
        const orderDetails = {
            id: _id,
            Name: Name,
            Image: Image,
            Price: Price,
            Description: Description,
            Quantity: Quantity,
            TotalQuantity: newQuantity,
            TotalPrice: totalPrice,
            Email: email
        }
        // console.log(email);
        fetch(`https://mysterious-forest-77053.herokuapp.com/orderDetails/`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast('Your Order is Complete');
                }
                else {
                    toast.error('your order is not successful');
                }

            })
    }

    return (
        <div className='m-20 '>
            <div class=" card lg:card-side bg-base-100 shadow-xl border-4 border-red-500">
                <div className=''>
                    <figure><img className='h-60' src={Image} alt="Album" /></figure>
                </div>
                <div class="card-body">
                    <h2 class="card-title">Name: {Name} </h2>
                    <h2 class="card-title">Price: {Price} </h2>
                    <h2 class="card-title">Available Quantity: {Quantity} </h2>

                    <hr />
                    <div className='font-bold '>
                        <h5>Description: {Description} </h5>
                    </div>



                    <div class="card-actions  items-center">
                        <button className=' btn btn-success' onClick={handleIncrease}>increase</button>
                        <button className='m-1 btn btn-warning' onClick={handleDecrease}>Decrease</button>
                    </div>


                    <div className=' mt-4 order-style d-flex justify-content-center align-items-center'>
                        <div className='flex justify-between'>
                            <h4 className='border-2 p-2 border-red-400'>Price: <b>{Price}</b> </h4>
                            <h4 className='border-2 p-2 border-red-400'>Quantity: <b>{newQuantity}</b> </h4>
                            <div className='border-2 p-2 border-red-400'>{
                                totalPrice ? <h4>Total price : <b>{totalPrice}</b> </h4> : <h4>Total price : <b> {Price}</b> </h4>
                            }</div>

                            
                            <button onClick={handleOrderProduct} className='btn btn-primary bg-orange-400 m-1 ' >Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;