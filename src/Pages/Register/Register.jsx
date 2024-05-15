import { Link } from "react-router-dom/dist";
import Navbar from "../../Component/Navbar/Navbar";
import { useContext, useState  } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Register = () => {

    const [success, setSuccess] = useState('');
    const [rgisterError, setRgisterError] = useState('');
    const [showPassword, setShowPassword ] =useState(false);

    const {createUser} = useContext(AuthContext);
    console.log(createUser);

    const handleRegister = e =>{
        e.preventDefault();  
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);

        setRgisterError();
        setSuccess();

       if (password.length < 6) {
          setRgisterError(
               "Password must contain at least 6 characters long."
           );
           return; // Don't proceed with login if password is invalid
       } else if(!/[A-Z]/.test(password)) {
          setRgisterError('Password must have at least one uppercase.');
           return;
       }

        createUser(email, password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.log(error)
        })

    }   
    return (
        <div>
             <Navbar></Navbar>
            <h2 className="text-3xl my-10 text-center font-bold">Please Register </h2>
            <div className="hero min-h-screen bg-base-200">  
              <div className="card-body md: w-3/4 lg:w-1/2 mx-auto" >
               <form onClick={handleRegister} className="card-body">
                   <div className="form-control">
                      <label className="label">
                         <span className="label-text">Name</span>
                      </label>
                      <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
                   </div>
                   <div className="form-control">
                      <label className="label">
                         <span className="label-text">Photo URL</span>
                      </label>
                      <input type="photo" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                   </div>
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
                        {rgisterError && <p style={{ color: 'red' }}>{rgisterError}</p>}                     
                      <label className="label">
                         <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                      </label>
                   </div>
                   <div className="form-control mt-6">
                        <button  className="btn btn-primary">Register</button>
                   </div>
                   <p className="text-center">Already Have An Account? Please <Link className="text-blue-600 font-bold" to="/login">Login</Link></p>
               </form>   
              </div>            
           </div> 
        </div>
    );
};

export default Register;