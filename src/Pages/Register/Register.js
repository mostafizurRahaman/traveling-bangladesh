import React, { useContext } from 'react';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link,  useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import OtherSignInButton from '../Shared/OtherSignInButton/OtherSignInButton';
import toast from 'react-hot-toast'; 

const Register = () => {
   const {createUser, addInfo, verifyEmail, GoogleSignIn, FacebookSignIn , setUser , GithubSignIn  } = useContext(AuthContext); 
   const navigate = useNavigate(); 

   const handleSubmit = (e) => {
      e.preventDefault(); 
      const form = e.target; 
      const firstName = form.firstName.value; 
      const lastName = form.lastName.value; 
      const email = form.email.value;
      const password = form.password.value; 
      const confirm =form.confirm.value; 
      console.log(firstName, lastName, email, password, confirm); 
      createUser(email, password)
      .then(res =>{
         console.log(res.user)
         const profile = {
            displayName: firstName +" " + lastName,  
            photoURL : 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/319700/319734.png'           
         }
         handleVerify();
         toast.success('Please verify your email address and an verification link is send to your email.')
         handleUpdate(profile); 
         form.reset(); 
      })
      .catch(err => console.log(err))
      
   }
   const handleUpdate = (profile) => {
         addInfo(profile)
   }
   const handleVerify = () => {
         verifyEmail()
         .then(()=>{})
         .catch((err)=>console.log(err));
   }
   const handleGoogleSignIn = () => {
         GoogleSignIn()
         .then(res => console.log(res.user))
         .catch(err => console.log(err))
   }

   const handleFacebookSignIn = () => {
      FacebookSignIn()
      .then(res => {
         const user =res.user; 
         if(user.emailVerified){
            navigate('/home'); 
         }else{
            handleVerify(); 
            toast('Verify your email and try again.')
         }
      })
      .catch(err => console.log(err))
    }

    const handleGithubSignIn = () => {
         GithubSignIn()
         .then(res => {
            const user =res.user; 
            if(user.emailVerified){
               navigate('/home'); 
            }else{
               handleVerify(); 
               toast('Verify your email and try again.')
            }
         })
         .catch((err)=> console.log(err))
    }

    
   return (
      <div className='w-100  flex items-center justify-center herobg h-auto'style={{minHeight: "100vh"}}>
        <div className='w-1/3 my-24 '>
      
        <form className='space-y-4  h-auto border border-slate-600 rounded-md p-5 shadow-gray-500 shadow-sm bg-white' onSubmit={handleSubmit}>
        <h3 className='text-3xl font-extrabold form-header'>Create a Account </h3>
            <div className='flex flex-col '>
               <label className='font-bold text-dark capitalize ' htmlFor="firstName">First Name :</label>
               <input className='text-base text-black font-medium bg-black bg-opacity-10 px-2 py-2 rounded-md mt-2 placeholder:capitalize '  type="text" name="firstName" id="firstName" placeholder='First Name : ' required />
            </div>
            <div className='flex flex-col '>    
               <label className='font-bold text-dark capitalize ' htmlFor="lastName">last Name :</label>
               <input className='text-base text-black font-medium bg-black bg-opacity-10 px-2 py-2 rounded-md mt-2 placeholder:capitalize '  type="text" name="lastName" id="lastName" placeholder='Last Name : ' required />
            </div>
            <div className='flex flex-col '>
               <label className='font-bold text-dark capitalize ' htmlFor="email">Email :</label>
               <input className='text-base text-black font-medium bg-black bg-opacity-10 px-2 py-2 rounded-md mt-2 placeholder:capitalize '  type="email" name="email" id="email" placeholder='email : '  required/>
            </div>
            <div className='flex flex-col'>
               <label className='font-bold text-dark capitalize ' htmlFor="password">Password :</label>
               <input className='text-base text-black font-medium bg-black bg-opacity-10 px-2 py-2 rounded-md mt-2 placeholder:capitalize '  type="password" name="password" id="password" placeholder='password : '  required/>
            </div>
            <div className='flex flex-col'>
               <label className='font-bold text-dark capitalize ' htmlFor="confirm">Confirm Password :</label>
               <input className='text-base text-black font-medium bg-black bg-opacity-10 px-2 py-2 rounded-md mt-2 placeholder:capitalize '  type="password" name="confirm" id="confirm" placeholder='confirm password : ' required />
            </div>
            <button className='bg-orange-400 text-black font-bold w-full px-3 py-2 rounded-md '>Register</button>
            <p className='font-medium '>Already have an account ?  <Link className='text-orange-400 capitalize underline ' to='/login'>login</Link > </p>
         </form>
         <div className='my-3 flex gap-1 items-center '>
            <div className='border h-1 flex-grow bg-white'></div>
            <p className='font-bold text-white'>or</p>
            <div className='border flex-grow h-1 bg-white'></div>
         </div>
         <OtherSignInButton text='Google Sign In' handleSignIn={handleGoogleSignIn}>
            <FcGoogle className='w-8 h-8'></FcGoogle>
        </OtherSignInButton>
         <OtherSignInButton text='Facebook Sign In' handleSignIn={handleFacebookSignIn}>
            <FaFacebook className='w-8 h-8 text-blue-600'></FaFacebook>
        </OtherSignInButton>
         <OtherSignInButton text='Github Sign In' handleSignIn={handleGithubSignIn} >
            <FaGithub className='w-8 h-8 text-black'></FaGithub>
        </OtherSignInButton>
        </div>
      </div>
   );
};

export default Register;