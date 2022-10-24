import React from 'react';

const OtherSignInButton = ({children, text, handleSignIn}) => {
   return (
      <button onClick={handleSignIn} className='w-full rounded-3xl relative bg-white border-2 shadow-sm shadow-white text-base px-2 py-2 font-bold mb-3 '> <span className='absolute top-1 left-1 '>{children}</span>{text}</button>
   );
};

export default OtherSignInButton;