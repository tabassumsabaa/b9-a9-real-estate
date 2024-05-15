
import { useParams } from 'react-router-dom';
import estatesData from '../../../public/estatesData.json';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

function EstateDetails() {
  const { id } = useParams();
  const estate = estatesData.find(estate => estate.id === parseInt(id));

  if (!estate) {
    return <div>Estate not found</div>;
  }

  return (
    <div>
      <div  className="w-3/4 mx-auto">
        <Navbar></Navbar>
        
      <div className="my-20">
      <h1 className="text-5xl font-bold text-center font-serif mb-10">Estate Details</h1>
       <div className="hero min-h-screen bg-base-200"> 
         <div className="hero-content flex-col lg:flex-row">
           <img src={estate.image} alt={estate.estate_title} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="gap-2">
          <h2 className="text-3xl font-bold mr-3 mb-5">{estate.estate_title}</h2>
          <p className="text-3xl font-semibold mr-3">{estate.description}</p>
          <p className="text-3xl font-semibold mr-3">Price: {estate.price}</p>
          <p className="text-3xl font-semibold mr-3">Status: {estate.status}</p>
          <p className="text-3xl font-semibold mr-3">Area: {estate.area}</p>
          <p className="text-3xl font-semibold mr-3">Location: {estate.location}</p>
          <p className="text-3xl font-semibold mr-3">Facilities: {estate.facilities.join(', ')}</p>             
            <button to="/login" className="btn btn-secondary mt-5 ">Booking Here</button>
          </div>
         </div>
       </div>
      </div> 
      </div>
         <Footer></Footer>  
    </div>
  );
}

export default EstateDetails;



// const EstateDetails = () => {
//     return (
//         <div>
//            <h2>this is detail page</h2>
//         </div>
//     );
//  };
 
//  export default EstateDetails;