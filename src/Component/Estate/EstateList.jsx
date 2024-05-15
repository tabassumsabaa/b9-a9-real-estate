
import { Link, } from 'react-router-dom';
import { useState, useEffect } from "react";


function EstateList() {
    const [data, setData] = useState([]);
     
    
    useEffect( ()=>{
        fetch('/estatesData.json')
      .then(res => res.json())
      .then(data =>{
        setData(data)
      })        
    }, [])

 
    
    
  return (
   <div className="mt-36"> 
        <h1 className='text-5xl font-mono text-slate-800 text-center mb-20'>Types of Hostel</h1>
    <div className='grid lg:grid-cols-3  mb-20 gap-4'>   
    {data.map(estate => (   
      <div className="card card-compact bg-base-100 shadow-xl w-4/5 mx-auto" key={estate.id}>
        <figure><img src={estate.image} alt={estate.estate_title} /></figure>
        <div className="card-body text-3xl f ">
           <h2 className="card-title">{estate.estate_title}</h2>
           <p>{estate.description}</p>
           <p>Price: {estate.price}</p>
           <p>Status: {estate.status}</p>
           <p>Area: {estate.area}</p>
           <p>Location: {estate.location}</p>
           <p>Facilities: {estate.facilities.join(', ')}</p>
           <div className="card-actions justify-center">
              <button className="btn btn-outline btn-secondary"> <Link to={`/estatesData/${estate.id}`}>View Property</Link></button>
           </div>
        </div> 
      </div>
    ))}
  </div>
 </div> 
  );
}
export default EstateList;
