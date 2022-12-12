import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {
  const {createUser}=useContext(AuthContext);

    const handleSubmit=(event)=>{
        event.preventDefault();
        const form = event.target;
        // const username = form.username.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email,password)
        .then(res=>console.log(res.user))
        .catch(err=>console.log(err))
        
    }
    return (
        <div className="hero w-full my-20">
        <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img className='w-3/4' src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-20">
          <h1 className="text-5xl text-center font-bold">Sign Up</h1>
            <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="username" placeholder="Your Name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name='email' type="text" placeholder="email" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name='password' type="text" placeholder="password" className="input input-bordered" required/>
             
              </div>
              <div className="form-control mt-6">
                <input  type="submit" value="SignUp" className='btn btn-primary' />
              </div>
            </form>
            <p className='text-center'>Already have an account? <Link className='text-orange-600 font-bold' to='/login'>Login</Link></p>
          </div>
        </div>
      </div>
    );
};

export default SignUp;