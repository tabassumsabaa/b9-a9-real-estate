import { useLoaderData } from "react-router-dom";
import EstateList from "../../Component/Estate/EstateList";
import Footer from "../../Component/Footer/Footer";
import Navbar from "../../Component/Navbar/Navbar";
import Slider from "../../Component/Slider/Slider";


const Home = () => {
    const estateData = useLoaderData();
    console.log(estateData);
    return (
        <div>
            <div className="w-3/4 mx-auto">
                <Navbar></Navbar>
                <Slider></Slider>
                <EstateList></EstateList>
               
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;