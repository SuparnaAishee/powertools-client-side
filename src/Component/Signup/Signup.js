import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../../Shared/Loading';

const SignUp = () => {

    const navigate = useNavigate();

    /* Sign in with google  */
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
   
    /* React hook from validation  process*/
    const { register, formState: { errors }, handleSubmit } = useForm();

    /* sign in with email and password  */
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

    /* Updating profile */
    const [updateProfile, updating, UpdatingError] = useUpdateProfile(auth);

    const [token ] = useToken(user || gUser );
    
    /* showing user in login */
    if (token) {
        // console.log(user, gUser);
        navigate('/allTools');
    }
    let signInError ;
    
    /*using  Loading  */
    if ( loading || gLoading || updating) {
        return <Loading></Loading>
    }
    /* showing error  */
    if(error || gError || UpdatingError){
        signInError = <p className='text-red-500'> <small>{error?.message || gError?.message || UpdatingError?.message} </small></p>
    }

    const onSubmit = async data => {
        // console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        // console.log('update done');
        navigate('/home');
    }



    return (
        <div className='pt-20 '>
             <div className="hero ">
                <div className="hero-content w-full flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                        <h1 className="text-2xl font-bold text-center text-warning">Sign Up</h1>
                            <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text"
                                        {...register("name", {
                                            required: {
                                                value: true,
                                                message: 'Name is required'
                                            }
                                        })}
                                        placeholder="Your Name"
                                        className="input input-bordered w-full max-w-xs" />

                                    <label className="label">
                                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                    </label>
                                </div>


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
                                <input className='w-full max-w-xs  btn bg-warning uppercase text-white font-bold  ' value="Sign Up" type="submit" />
                            </form>

                            <p><small>All ready have an account  ?</small> <Link to="/login" className='text-success'><b>Please Login </b></Link>  </p>

                            <div className='divider'>OR</div>
                            <button onClick={() => signInWithGoogle()} className='btn btn-outline '>Continue With Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;