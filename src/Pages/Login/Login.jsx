import Navbar from "../../Component/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate,  } from "react-router-dom";


const Login = () => {
    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('location in the log in page' , location);
  

    const [success, setSuccess] = useState('');
    const [loginError, setLoginError] = useState('');
    const [showPassword, setShowPassword ] =useState(false);


    const handleLogin = e =>{
        e.preventDefault();       
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

         setLoginError();
         setSuccess();

        if (password.length < 6) {
            setLoginError(
                "Password must contain at least 6 characters long."
            );
            return; // Don't proceed with login if password is invalid
        } else if(!/[A-Z]/.test(password)) {
            setLoginError('Password must have at least one uppercase.');
            return;
        }


        signIn(email, password)
           .then(result =>{
               console.log(result.user)
               // navigate after log in
                navigate(location.state ? location.state : '/');
           })
           .catch(error =>{
               console.log(error);
           })
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

                       <div className="relative items-center">
                          <input type={showPassword ? 'text' : 'password' } name="password" placeholder="password" className="input input-bordered w-full" required />                            
                           <span onClick={() => setShowPassword(!showPassword)} className="absolute top-3 right-2 ">
                              {
                                  showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                              }
                          </span>                           
                       </div> 
                       {loginError && <p style={{ color: 'red' }}>{loginError}</p>}

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