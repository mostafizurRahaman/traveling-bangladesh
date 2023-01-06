import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'; 
import app from '../Firebase/Firebase.init';


export const AuthContext = createContext(); 
const auth = getAuth(app); 
const GoogleProvider = new GoogleAuthProvider(); 
const FacebookProvider = new FacebookAuthProvider(); 
const GithubProvider = new GithubAuthProvider(); 

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null); 
  const [loading , setLoading] = useState(true); 

  const createUser = (email, password) => {
      setLoading(true); 
      return createUserWithEmailAndPassword(auth, email, password);
  }

  const LogIn = (email, password) => {
   setLoading(true); 
   return signInWithEmailAndPassword(auth, email, password); 
  }

  const addInfo = (profile) => {
   setLoading(true);
   return updateProfile(auth.currentUser, profile); 
  }
  const verifyEmail = () => {
      return sendEmailVerification(auth.currentUser)
  }

  const GoogleSignIn = () => {
      setLoading(true); 
      return signInWithPopup(auth ,GoogleProvider); 
  }

  const FacebookSignIn = () =>{
      setLoading(true);
      return signInWithPopup(auth ,FacebookProvider); 
  }
  const GithubSignIn = () => {
        setLoading(true); 
        return signInWithPopup(auth , GithubProvider); 
  }

 
  const logOut = () => {
   setLoading(true); 
   return signOut(auth); 
  }

  useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    if(currentUser === null ||  currentUser.emailVerified){
       setUser(currentUser);
    }   
    
     setLoading(false)
     
   })

   return () => unsubscribe(); 
  }, [])
   const authInfo = {user, createUser, LogIn,  logOut, addInfo, verifyEmail, loading, setLoading , GoogleSignIn, FacebookSignIn, setUser, GithubSignIn}
   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;