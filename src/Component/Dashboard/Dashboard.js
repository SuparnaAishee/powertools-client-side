import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import banner from '../../assets/Welcome.png';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    // console.log(user.email);
    return (
        <div className="drawer drawer-mobile mt-16 ">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <h2 className='text-3xl p-5 bg-black  text-white font-bold'>Welcome to your Dashboard</h2>
                {/* <img className='w-full h-3/4' src={banner} alt="" /> */}
                <Outlet></Outlet>

            </div>

            <div className="drawer-side ">

                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto h-[100vh] w-48 bg-slate-300 text-base-content ">


                    <li><Link to="/dashboard/myOrders">My Orders</Link></li>
                    <li><Link to="/dashboard/addReview">Review</Link></li>
                    <li><Link to="/dashboard/payment">Payment</Link></li>
                    <li><Link to="/dashboard/myProfile">My Profile</Link></li>
                   


                    {
                        admin && <>
                             <li><Link to="/dashboard/allOrders">All Order</Link></li>
                        </>
                    }
                    {
                        admin && <>
                            <li><Link to="/dashboard/users">All Users</Link></li>
                        </>
                    }
                </ul>

            </div>

            <div>

            </div>
        </div>
    );
};

export default Dashboard;