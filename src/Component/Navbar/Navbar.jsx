import { Link, NavLink } from "react-router-dom";
import userDefaultPic from "../../assets/image/hostel-logo.jpg";

const Navbar = () => {
    const navLinks =<>
    <li> <NavLink to="/">Home</NavLink></li>        
    <li> <NavLink to="/login">Update</NavLink></li>   
    <li> <NavLink to=" ">Profile</NavLink></li>
    
</>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">        
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-2 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
        {navLinks}
      </ul>
    </div>
    <img className="h-10 w-22" src={userDefaultPic} alt=""  />
  </div>

  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-2">
      {navLinks}
    </ul>
  </div>

  <div className="navbar-end">
       <Link to="/login">Login</Link>
  </div>
</div>

    );
};

export default Navbar;