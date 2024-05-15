import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root/Root';
import Home from './Pages/Home/Home';
import Error from './Pages/Error/Error';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Provider/AuthProvider';
// import PrivateRouter from './Provider/PrivateRouter';
// import EstateList from './Component/Estate/EstateList';
import EstateDetails from './Component/Estate/EstateDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('estatesData.json')
      },
      {
        path: '/estatesData/:id',
        element: <EstateDetails></EstateDetails> 
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>,
      }
  ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
       <RouterProvider router={router} />
    </AuthProvider>      
  </React.StrictMode>,
)
