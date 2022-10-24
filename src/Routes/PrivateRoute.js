import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
   const {user, loading} = useContext(AuthContext); 
   const location = useLocation(); 
   
   console.log(user); 
   if(loading){
      return <h3>loading ........................</h3>
   }
   
   if(user && user.uid){
      return children; 
   }
   return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;