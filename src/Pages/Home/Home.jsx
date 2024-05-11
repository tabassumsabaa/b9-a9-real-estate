import Navbar from "../../Component/Navbar/Navbar";
import Slider from "../../Component/Slider/Slider";


const Home = () => {
    return (
        <div>
            <div className="w-3/4 mx-auto">
                <Navbar></Navbar>
                <Slider></Slider>
            </div>
        </div>
    );
};

export default Home;