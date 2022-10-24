import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/img/logo.png'; 
import {CgProfile} from 'react-icons/cg'
import { AuthContext } from '../../../AuthProvider/AuthProvider';
const Header = () => {
   const {user, logOut}  = useContext(AuthContext); 
   const handleLogOut = () => {
      logOut()
      .then(()=> {})
      .catch(err => console.log(err))
   }
   return (
      <div className='flex items-center justify-between px-14 text-xl h-20  text-white  fixed left-0 top-0 w-full bg-slate-600 bg-opacity-50'>
           <div className="logo-section">
               <Link to='/'><img src={logo} alt="" className="w-20 h-20" /></Link>
            </div>
            <nav className='flex items-center gap-4 capitalize  font-bold   '>
               <Link to='/home'>Home</Link>
               <Link to='/destination'>Destination</Link>
               <Link to='/travels'>travels</Link>
               <Link to='/hotels'>hotels</Link>
            </nav>      
            <div className='flex gap-8 font-bold'>
               {
                  user?.uid ? 
                     <button className='bg-orange-400 px-5 py-2 rounded-lg' onClick={handleLogOut}>logout</button>
                  :
                  <>
                       <Link className='bg-orange-400 px-5 py-2 rounded-lg' to='/login'>Login</Link>
               <Link className='bg-orange-400 px-5 py-2 rounded-lg' to='/register'>Register</Link>   
                  </>
               }             
            </div>   
            <div className='flex gap-8 font-bold'>
               <Link className='' to='/profile'>
                 {
                  user?.uid ? <img className='w-14 h-14 rounded-full bg-white' src={user?.photoURL} alt=''/> :                  
                  <CgProfile></CgProfile>
                 }                  
               </Link>              
            </div>   
      </div>
   );
};

export default Header;