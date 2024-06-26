import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/Auth";

import { useNavigate } from "react-router-dom";
const Login = () => {
  const {singUser,singInWithGoogle} = useContext(AuthContext)
  const navigate = useNavigate()
    const handleLogin =e =>{
        e.preventDefault()
        const email = e.target.email.value
        const password =e.target.password.value
        console.log(email,password)
        singUser(email,password)
        .then(result =>{
          console.log(result.user)
          e.target.reset()
          navigate('/orders')

        })
        .catch(error =>{
          console.error(error)
        })

    }
    // google 
    const handleGoogleSing =()=>{
      singInWithGoogle()
      .then(result =>{
        console.log(result.user)
      })
      .catch(error =>{
        console.log(error)
      })
    }
    return (
        <div className="hero min-h-screen bg-base-200  rounded-lg">
        <div className="hero-content flex-col w-full">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleLogin}>
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              </form>
              <p>New here?please<Link to='/register'><button className="btn btn-link">Register</button></Link></p>
           <p><button onClick={handleGoogleSing} className="btn btn-ghost text-xl">Google</button></p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;