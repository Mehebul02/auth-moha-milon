import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const handleRegister =e =>{
        e.preventDefault()
        const name =e.target.name.value
        const email = e.target.email.value
        const password =e.target.password.value
        console.log(name,email,password)

    }
    return (
        <div className="hero min-h-screen bg-base-200  rounded-lg">
        <div className="hero-content flex-col w-full">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Register Now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-yellow-600 text-xl font-semibold text-black">Register</button>
              </div>
              </form>
              <p>Already have account?Please<Link to='/login'><button className='btn btn-link'>Login</button></Link></p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;