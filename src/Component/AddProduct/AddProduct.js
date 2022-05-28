import React from 'react';

const AddProduct = () => {
    const addItem = event =>{
        event.preventDefault();
        const Name = event.target.name.value;
        const Price = event.target.price.value;
        const Quantity = event.target.quantity.value;
        const Image = event.target.image.value;
        const Description = event.target.description.value;
        const tool = {Name ,Image,Quantity, Price,  Description};
        

        const url = `https://mysterious-forest-77053.herokuapp.com/tools`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(tool)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }


    return (
        <div className='mt-20'>
             <div className='w-50 mx-auto mt-5 pt-5 flex justify-center items-center'>
            
                <form  onSubmit={addItem} className='my-4  border-2 border-red-400 from-design w-100 p-3 '>
                <h1 className='text-center text-2xl text-orange-500  font-bold '>Add Item</h1>
                    <input className='border-2 border-orange-200 outline-0 p-2 m-2  rounded-lg' placeholder='Enter product name' type="text" name="name" id="" /><br />
                    <input className='border-2 border-orange-200 outline-0 p-2 m-2 rounded-lg' placeholder='Enter product price' type="text" name="price" id="" /><br />
                    <input className='border-2 border-orange-200 outline-0 p-2 m-2 rounded-lg' placeholder='Enter product quantity' type="text" name="quantity" id="" /><br />
                    <input className='border-2 border-orange-200 outline-0 p-2 m-2 rounded-lg' placeholder='Enter product image url' type="text" name="image" id="" /><br />
                    <input className='border-2 border-orange-200 outline-0 p-2 m-2 rounded-lg' placeholder='Enter product description' type="text" name="description" id="" /><br />
                    <div className='text-center '><input className='btn btn-warning'  type="submit"  value="Add Item" /></div>
                </form>
                
        </div>
        </div>
    );
};

export default AddProduct;