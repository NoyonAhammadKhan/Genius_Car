import './App.css';
import {  RouterProvider } from 'react-router-dom';
import router from './Router/Routes/Routes';
function App() {

  return (
    <div className='max-w-screen-x1 mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>

    //tutorial 8 6 minute 42 second
  );
}

export default App;
