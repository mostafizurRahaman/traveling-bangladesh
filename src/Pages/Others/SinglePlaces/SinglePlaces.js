import React from 'react';
import { Link } from 'react-router-dom';
const SinglePlaces = ({place}) => {
   const { name, id ,photoUrl,details} = place; 
   return (
      <div className="w-full h-80 border-2 rounded-md border-white relative" >
         <div className=' absolute w-full z-20 bottom-0 left-0 h-32 transition-all duration-500 hover:h-full flex items-center  justify-center rounded-md' style={{background: 'rgba(0, 0, 0, 0.612)'}}>
               <div className='w-full'>
                     <h3 className='text-white text-center text-base'>{name}</h3>
                     <Link to={`/places/${id}`}>
                     <button className='px-3 py-2 mt-2 block mx-auto bg-orange-500 rounded-lg  text-white text-center'>Book Now</button>
                     </Link>
               </div>
         </div>
         <img src={photoUrl} alt="" className='w-full h-full rounded-md z-10'/>
      </div>
   );
};

export default SinglePlaces;