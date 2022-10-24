import React, { useContext } from 'react';
import OtherSignInButton from '../Shared/OtherSignInButton/OtherSignInButton';
import {FcGoogle}  from 'react-icons/fc'; 
import {FaFacebook,  FaGithub} from 'react-icons/fa'; 
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';




const Login = () => {
   const {LogIn, setLoading, GoogleSignIn, FacebookSignIn , verifyEmail, setUser, GithubSignIn  } = useContext(AuthContext); 
   const location = useLocation(); 
   const navigate = useNavigate(); 
   const from = location.state?.from?.pathname || '/'; 

   const handleSubmit = (e) => {
      e.preventDefault(); 
      const form = e.target; 
      const email = form.email.value; 
      const password = form.password.value; 
      console.log(email, password); 

      
      LogIn(email, password)
      .then(res => {
        const user = res.user; 
       if(user.uid  && user.emailVerified){
            navigate(from , {replace: true}); 
            toast.success('You are successful');
         }else{
            toast.error("Your account is not verified. please verify your account. Without verificaiton  you can't Login. ")
         }
         form.reset(); 
         
      })
      .catch(err => console.log(err))
      .finally(()=> {
         setLoading(false)
      } )
   }
 const handleGoogleSignIn = () => {
      GoogleSignIn()
      .then(res =>{
         const user = res.user; 
      if(user.emailVerified){
         navigate(from ,{replace: true})
      }
      })
      .catch(err => console.log(err))
 }

 const handleFacebookSignIn = () => {
   FacebookSignIn()
   .then(res => {
      const user =res.user; 
      console.log(user.email)
      if(user.emailVerified){
         // setUser(user); 
         navigate(from , {replace: true}); 
      }else{
         handleVerificaitonEmail(user.email); 
         toast('Verify your email and try again.')
      }
   })
   .catch(err => console.log(err))
 }

 const handleGithubSignIn = () => {
      GithubSignIn()
      .then(res => {
         const user = res.user; 
         if(user.emailVerified){
            navigate(from , {replace: true}); 
         }else{
            handleVerificaitonEmail(user.email); 
            toast('Verify your email and try again.')
         }
      })
      
 }



 const handleVerificaitonEmail = (email) => {
      verifyEmail(email)
      .then(()=>{})
      .catch(err => console.log(err));
 }
   return (
      <div className='w-100  flex items-center justify-center herobg h-auto'style={{minHeight: "100vh"}}>
        <div className='w-1/3 my-24 '>
        <form onSubmit={handleSubmit} className=' space-y-4  h-auto border border-slate-600 rounded-md p-5 shadow-gray-500 shadow-sm bg-white'>
        <h3 className='text-3xl font-extrabold form-header'>login</h3>
            <div className='flex flex-col '>
               <label className='font-bold text-dark capitalize ' htmlFor="email">Email :</label>
               <input className='text-base text-black font-medium bg-black bg-opacity-10 px-2 py-2 rounded-md mt-2 placeholder:capitalize '  type="email" name="email" id="email" placeholder='email : ' required />
            </div>
            <div className='flex flex-col'>
               <label className='font-bold text-dark capitalize ' htmlFor="password">Password :</label>
               <input className='text-base text-black font-medium bg-black bg-opacity-10 px-2 py-2 rounded-md mt-2 placeholder:capitalize '  type="password" name="password" id="password" placeholder='password : ' required />
            </div>
            <div  className='flex  justify-between'>
               <div className='flex items-center gap-1 font-semibold '>
                  <input type="checkbox" id='remember' />
                  <label htmlFor="remember">Remember Me</label>
               </div>
               <button className='text-orange-400 font-medium underline'>Forget Password</button>
            </div>
            <button className='bg-orange-400 text-black font-bold w-full px-3 py-2 rounded-md '>login</button>
            <p className='font-medium '>Don't have an account? <Link className='text-orange-400 underline ' to='/register'>Create an account</Link > </p>
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
         <OtherSignInButton text='Github Sign In' handleSignIn={handleGithubSignIn}>
            <FaGithub className='w-8 h-8 text-black'></FaGithub>
        </OtherSignInButton>
        </div>
      </div>
   );
};

export default Login;