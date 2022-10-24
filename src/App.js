import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes';
import {Toaster} from 'react-hot-toast'

function App() {
  return (
    <div >
       <RouterProvider router={routes}></RouterProvider>
       <Toaster position='right-top'></Toaster>
    </div>
  );
}

export default App;