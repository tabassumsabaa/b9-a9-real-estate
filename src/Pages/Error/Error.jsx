import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className= " text-center w-1/2 mx-auto bg-slate-300 ">
            <h2 className="border-spacing-2 mt-10  p-9 text-5xl font-extrabold">OooPs....!!</h2> 
            <Link to="/" className="text-red-500">Back Home Here</Link>           
        </div>
    );
};

export default Error;