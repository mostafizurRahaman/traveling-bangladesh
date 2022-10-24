import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main/Main';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import PlaceDetails from '../Pages/Others/PlaceDetails/PlaceDetails';
import Register from '../Pages/Register/Register';
import PrivateRoute from './PrivateRoute';


export const routes = createBrowserRouter([
   {
      path: '/',
      element: <Main></Main>, 
      children: [
         {
            path:'/', 
            element:<Home></Home>, 
            loader: () => fetch('https://travel-guru-server-six.vercel.app/places')
         }, 
         {
            path:'/home', 
            element:<Home></Home>,
            loader: () => fetch('https://travel-guru-server-six.vercel.app/places')
         }, 
         {
            path: '/places/:id', 
            element: <PrivateRoute><PlaceDetails></PlaceDetails> </PrivateRoute>, 
            loader: ({params}) => fetch(`https://travel-guru-server-six.vercel.app/places/${params.id}`) 
         }, {
            path: '/login', 
            element: <Login></Login>
         }, 
         {
            path: '/register', 
            element: <Register></Register>
         }
      ]
   }
])