import { useEffect } from 'react';
const useTitle = title => {
   useEffect(()=>{
      document.title = `${title} - Traveling Bangladesh`; 
   }, [title])
}


export default useTitle; 


























