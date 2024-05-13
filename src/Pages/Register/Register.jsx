import { Link } from "react-router-dom/dist";
import Navbar from "../../Component/Navbar/Navbar";


const Register = () => {
    const handleRegister = e =>{
        e.preventDefault();  
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);
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
                      <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                      <label className="label">
                         <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                      </label>
                   </div>
                   <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                   </div>
                   <p className="text-center">Already Have An Account? Please <Link className="text-blue-600 font-bold" to="/login">Login</Link></p>
               </form>   
              </div>            
           </div> 
        </div>
    );
};

export default Register;