import { Link } from "react-router-dom/dist";
import Navbar from "../../Component/Navbar/Navbar";


const Login = () => {
    const handleLogin = e =>{
        e.preventDefault();       
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
    }  
    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-base-200 py-4 ">
               <h2 className="text-3xl my-10 text-center font-bold">Please Login</h2>                       
               <form onClick={handleLogin} className="  md: w-3/4 lg:w-1/2 mx-auto">
                   <div className="form-control">
                      <label className="label">
                         <span className="label-text">Email</span>
                      </label>
                      <input type="email" name="email" placeholder="email" className="input input-bordered" required />
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
               <p className="text-sm text-center font-semibold mt-4">Do not Have An Account? Please <Link className="text-red-600" to="/register">Register</Link></p>
                      
           </div> 
        </div>
    );
};

export default Login;