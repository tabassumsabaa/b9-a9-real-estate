import { Outlet } from "react-router-dom";
// import AuthProvider from "../../Provider/AuthProvider";


const Root = () => {
    return (
        <div>  
            {/* <AuthProvider text={"hello"}> <button>click me</button></AuthProvider>                   */}
           <Outlet></Outlet>
        </div>
    );
};

export default Root;