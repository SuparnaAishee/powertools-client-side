import React from 'react';
import { Link } from 'react-router-dom';
import useProduct from '../../hooks/useProduct';

const ManageAllProduct = () => {


    const [tools, setTools] = useProduct([]);


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure delete this item ?');
        if (proceed) {
            const url = `https://mysterious-forest-77053.herokuapp.com/tools/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = tools.filter(tool => tool._id !== id);
                    setTools(remaining);
                });
        }
    }


    return (
        <div> <div className='text-center mt-20 flex justify-center items-center'>
            <div className='w-50 mx-auto ps-5 mt-5 pt-5'>
                <h1 className='text-orange-400 text-2xl font-bold  mb-3 ms-5 ps-3'>Manage Products</h1>

                {
                    tools.map(tool =>
                        <div className='card-style my-5  ' key={tool.id}>
                            <div className='flex justify-between w-90 shadow-lg rounded-lg p-10 '>
                                 <img className='w-20' src={tool.Image} alt="" />  
                                 <h5> <b>{tool.Name}</b> </h5>
                                 <h5><button onClick={() => handleDelete(tool._id)} className="delete-button  bg-green-400  p-2 rounded-lg text-white "> Delete </button></h5></div>
                        </div>)
                }

            </div>
        </div>
            <div className='text-center  '>
                <Link to={`/addProduct`}> <button className="btn btn-primary">Add New Item</button> </Link>
            </div></div>
    );
};

export default ManageAllProduct;