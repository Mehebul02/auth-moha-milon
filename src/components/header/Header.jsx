import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/Auth";


const Header = () => {
  const {user,logOut} =useContext(AuthContext)
  const handleSingOut =()=>{
    logOut()
    .then( ()=> {
       alert('logged successfully')
    })
    .catch(error =>{
console.log(error)
    })
  }
    const navLinks =<>
    <NavLink to='/'  className={({ isActive }) =>
    isActive? "border-b-2  rounded-md border-red-600 font-bold text-yellow-600 " :  ""
  }><li>Home</li></NavLink>
    <NavLink to='/login' className={({ isActive }) =>
    isActive? "border-b-2  rounded-md border-red-600 font-bold text-yellow-600" :  ""
  }><li>Login</li></NavLink>
    <NavLink to='/register' className={({ isActive }) =>
    isActive? "border-b-2  rounded-md border-red-600 font-bold text-yellow-600" :  ""
  }><li>Register</li></NavLink>
    <NavLink to='/orders' className={({ isActive }) =>
    isActive? "border-b-2  rounded-md border-red-600 font-bold text-yellow-600" :  ""
  }><li>Orders</li></NavLink>
  {user && <>
    <NavLink to='/profile' className={({ isActive }) =>
    isActive? "border-b-2  rounded-md border-red-600 font-bold text-yellow-600" :  ""
  }><li>Profile</li></NavLink>
  <NavLink to='/dashboard' className={({ isActive }) =>
    isActive? "border-b-2  rounded-md border-red-600 font-bold text-yellow-600" :  ""
  }><li>Dashboard</li></NavLink>
  </>}
    </>
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu gap-10 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLinks}
            </ul>
          </div>
          <Link to='/'><a className="btn btn-ghost text-xl font-bold text-yellow-700">Auth Moha Milon</a>
</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu text-2xl  menu-horizontal p-43 space-x-5">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ? <>
            <span>{user.email}</span>
            <a onClick={handleSingOut} className="btn btn-sm text-yellow-700 text-xl">Sing Out</a>
            </>:
            <Link to='/login'><button className="btn btn-sm text-yellow-700 text-xl">Login</button></Link>
          }
    
        </div>
      </div>
    );
};

export default Header;