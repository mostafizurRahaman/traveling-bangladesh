import React from "react";

import { Link, useLoaderData } from "react-router-dom";
import useTitle from './../../../hooks/useTitle';

const PlaceDetails = () => {
   const { id, name, details } = useLoaderData();
      useTitle(name) 
   return (
      <div className="flex items-center justify-center w-full h-screen  herobg">
         <div className="flex w-4/5 items-center justify-between">
          
          
            <div className="w-2/5 space-y-3">
               <h4 className="text-4xl md:text-7xl text-center text-white">{name}</h4>
               <p className="text-justify text-base text-white">{details}</p>
            </div>
            <div className="w-2/5">
               <form className="space-y-4 bg-white p-5 rounded-md">
                  <div className='flex flex-col'>
                     <label className="text-base capitalize font-bold text-slate-700" htmlFor="origin">origin :</label>
                     <input className="bg-black bg-opacity-10 px-3 py-2 rounded-sm mt-2 font-medium text-black " type="text" placeholder="Enter your current location: " id="origin" name="origin" />
                  </div>
                  <div className='flex flex-col'>
                     <label className="text-base capitalize font-bold text-slate-700" htmlFor="destination">destination :</label>
                     <input className="bg-black bg-opacity-10 px-3 py-2 rounded-sm mt-2 font-medium text-black " type="text" placeholder="Enter your destination: " id="destination" name="destination"  defaultValue={name}/>
                  </div>
                  <div className="flex gap-3">                     
                     <div className='flex flex-col'>
                        <label className="text-base capitalize font-bold text-slate-700" htmlFor="fromDate">From Date :</label>
                        <input className="bg-black bg-opacity-10 px-3 py-2 rounded-sm mt-2 font-medium text-black " type="date" placeholder="select a date: " id="fromDate" name="fromDate" />
                     </div> 
                     <div className='flex flex-col'>
                        <label className="text-base capitalize font-bold text-slate-700" htmlFor="toData">To Date :</label>
                        <input className="bg-black bg-opacity-10 px-3 py-2 rounded-sm mt-2 font-medium text-black " type="date" placeholder="select a date: " id="toDate" name="toDate" />
                     </div> 
                  </div>
                  <div>
                     <Link to="/booking" className="text-base font-bold text-center px-3 py-3 bg-orange-400 block rounded-md text-white">
                           Booking Now
                     </Link>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default PlaceDetails;
