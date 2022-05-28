import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import Loading from '../../Shared/Loading';
// import useToken from '../../hooks/useToken';
const Login = () => {

    const navigate = useNavigate();
    let signInError;
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';



    /* Sign in with google  */
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    /* React hook from validation  process*/
    const { register, formState: { errors }, handleSubmit } = useForm();

    /* sign in with email and password  */
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  
    /* showing user in login and navigate current page you access that*/
    useEffect(() => {
        if (user || googleUser) {
            // console.log(user, gUser);
            navigate(from, { replace: true });
        }
    }, [user || googleUser , from, navigate]);


    /*using  Loading */
    if (loading || googleLoading) {
        return <Loading></Loading>
    }
    /* showing error  */
    if (error || googleError) {
        signInError = <p className='text-red-500'> <small>{error?.message || googleError?.message} </small></p>
    }
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    };

    return (
        <div className='pt-20 '>
            <div className="hero ">
                <div className="hero-content w-full flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-2xl font-bold text-center text-warning">Login Now</h1>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email"
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: 'Email is required'
                                            },
                                            pattern: {
                                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                message: 'Provide a Valid Email'
                                            }
                                        })}
                                        placeholder="Your Email"
                                        className="input input-bordered w-full max-w-xs" />

                                    <label className="label">
                                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    </label>
                                </div>


                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password"
                                        {...register("password", {
                                            required: {
                                                value: true,
                                                message: 'Password is required'
                                            },
                                            minLength: {
                                                value: 6,
                                                message: 'Must be 6 characters or longer'
                                            }
                                        })}
                                        placeholder="Your Password"
                                        className="input input-bordered w-full max-w-xs" />

                                    <label className="label">
                                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    </label>
                                </div>
                                {signInError}
                                <input className='w-full max-w-xs  btn bg-warning uppercase text-white font-bold  ' value="Login" type="submit" />
                            </form>

                            <p><small>New to Hardware Tools ?</small> <Link to="/signUp" className='text-success'><b>Create a New Account</b></Link>  </p>

                            <div className='divider'>OR</div>
                            <button onClick={() => signInWithGoogle()} className='btn btn-outline '>Continue With Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;