import React from 'react';

const AddReview = () => {

   
        

        // const url = `https://mysterious-forest-77053.herokuapp.com/tools`;
        // fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'

        //     },
        //     body: JSON.stringify(tool)
        // })
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data)
        // })


    const handleSubmit =(e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const comment = e.target.comment.value;
        // console.log(name, comment);
        const review = {name, comment};
        // console.log(review);


         const url = `https://mysterious-forest-77053.herokuapp.com/review`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })


    }
    return (
        <div className='mt-24'>
            <h1 className='text-center text-2xl '>Please Give Your review here </h1> 
               <div className='flex justify-center items-center'>
               <form className='w-60' onSubmit={handleSubmit}>
                   <h1 className='text-2xl font-bold text-center py-3 '>Review</h1>
                    <input placeholder='Enter your name' className='w-full p-1 my-2 border-2 border-red-300' type="text" name="name" id="" /><br />
                    <input placeholder='Enter your comment ' className='my-2 p-1 w-full border-2 border-red-300' type="text" name="comment" id="" /><br />
                    <button type='submit'  className='border-2 p-1 w-full bg-green-400 text-white' >Submit</button>
                </form>
               </div>
        </div>
    );
};

export default AddReview;