import { useNavigate } from 'react-router-dom';
import rating from '../../assets/rating.ico'

const HomeTools = ({ tool }) => {

    const {_id, Image, Name, Price, Description, Quantity}= tool;




    const navigate = useNavigate();
    const handleOrder = (id) => {
        navigate(`/purchase/${id}`)
        // console.log(id);  
    }
    // console.log(tools.length);
    return (
        <div className='mt-20 mx-10  flex justify-center items-center'>
            <div class="card w-80 bg-base-100 shadow-xl">
                <figure><img className="h-40 w-full" src={Image} alt="" /></figure>
                <div class="card-body">
                    <h2 class="card-title">
                        {Name}
                    </h2>
                    <p>Price: {Price} </p>
                    <p>Available Quantity: {Quantity} </p>
                    <p>{Description}</p>

                    <div className="flex  items-center gap-4">
                        <div class="card-actions justify-start">
                        <button onClick={() => handleOrder(_id)} class="btn btn-secondary  font-bold  btn-sm ">Order</button>
                        </div>
                    <div class="card-actions justify-end">
                        <div class="badge badge-outline">Ratings </div>
                        <div class="h-1 w-5"><img src={rating} alt="" /></div>
                        <div class="h-1 w-5"><img src={rating} alt="" /></div>
                        <div class="h-1 w-5"><img src={rating} alt="" /></div>
                        <div class="h-1 w-5"><img src={rating} alt="" /></div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeTools;