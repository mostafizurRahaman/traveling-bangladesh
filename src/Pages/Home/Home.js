import React, { useState } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useLoaderData } from 'react-router-dom';
import SinglePlaces from '../Others/SinglePlaces/SinglePlaces';
import { Helmet } from 'react-helmet-async';
const Home = () => {
   const [places, setPlaces] = useState(useLoaderData()); 
   console.log(places); 

 
   

   return (
         <div className='flex items-center justify-around h-screen p-5 gap-5 herobg'>
            <Helmet>
                <title>Home - Traveling Bangladesh </title>
            </Helmet>
            <div className='w-2/5 space-y-4'>  
                     <h2 className=' text-white text-5xl font-bold text-center' >Travel Bd</h2>
                  <p className='text-xl text-white text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aliquid, in exercitationem incidunt ut voluptate eum tempore ea hic adipisci alias impedit molestiae repellendus possimus!</p>
                  <button>
                     Booking now
                  </button>
            </div>
            <div className='w-3/5'>
            <Swiper style={{paddingBottom: "50px"}}
                     
                     slidesPerGroup={3}
                     loop={true}
                     loopFillGroupWithBlank={true}
                     navigation={true}
                     modules={[Navigation]}
                     className="mySwiper pb-14"
                     breakpoints={{
                        0:{
                           slidesPerView: 1,  
                           spaceBetween: 30, 
                        }, 
                        768:{
                           slidesPerView: 2,   
                           spaceBetween: 50,
                        },
                        992:{
                           slidesPerView:3, 
                           spaceBetween: 30,    
                        }
                     }}
                     
                  >
                  {
                     places.map(place => <SwiperSlide key={place.id}>
                           <SinglePlaces place={place}></SinglePlaces>
                     </SwiperSlide>)
                  }
               
                     
                  </Swiper>
                  
            </div>
         </div>
   );
};

export default Home;