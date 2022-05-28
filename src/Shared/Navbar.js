import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../firebase.init';
import useAdmin from '../hooks/useAdmin';

const Navbar = () => {

    const [user, gUser, loading, error] = useAuthState(auth);
    const logOut = () => {
        signOut(auth);
    }

    const [admin] = useAdmin(user || gUser);

    return (
        <div className=''>
            <div className="navbar bg-base-100 shadow-lg fixed top-0 z-50 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to="/home" >Home</NavLink></li>
                            <li><NavLink to="/allTools" >All Tools</NavLink></li>
                            {
                                user && <li><Link to="/dashboard">Dashboard</Link></li>
                            }
                            <li><NavLink to="/blog">Blog</NavLink></li>

                            {
                                admin && <li><NavLink to="/manageAllProduct">Manage Product</NavLink></li>
                            }

                            {
                                admin && <li><NavLink to="/addProduct">Add Product</NavLink></li>
                            }
                            <li><NavLink to="/portFolio">My Portfolio</NavLink></li>
                            <li>{user ? <button className="" onClick={logOut}>Sign Out</button> : <Link to="/login">Login</Link>}</li>

                        </ul>
                    </div>
                    <Link to="/home" className="btn btn-ghost normal-case text-xl">Tech Tools</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><NavLink to="/home" >Home</NavLink></li>
                        <li><NavLink to="/allTools" >All Tools</NavLink></li>
                        {
                            user && <li><Link to="/dashboard">Dashboard</Link></li>
                        }
                        <li><NavLink to="/blog">Blog</NavLink></li>
                        {
                            admin && <li><NavLink to="/manageAllProduct">Manage Product</NavLink></li>
                        }
                        {
                            admin && <li><NavLink to="/addProduct">Add Product</NavLink></li>
                        }
                        <li><NavLink to="/portFolio">My Portfolio</NavLink></li>
                        <li>{user ? <button className="" onClick={logOut}>Sign Out</button> : <Link to="/login">Login</Link>}</li>

                    </ul>
                </div>
                <div className="navbar-end">
                    <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost  lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;