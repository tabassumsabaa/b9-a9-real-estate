
import { useParams } from 'react-router-dom';
import estatesData from '../../../public/estatesData.json';

function EstateDetails() {
  const { id } = useParams();
  const estate = estatesData.find(estate => estate.id === parseInt(id));

  if (!estate) {
    return <div>Estate not found</div>;
  }

  return (
    <div>
      <h1>Estate Details</h1>
      <img src={estate.image} alt={estate.estate_title} />
      <h2>{estate.estate_title}</h2>
      <p>{estate.description}</p>
      <p>Price: {estate.price}</p>
      <p>Status: {estate.status}</p>
      <p>Area: {estate.area}</p>
      <p>Location: {estate.location}</p>
      <p>Facilities: {estate.facilities.join(', ')}</p>
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