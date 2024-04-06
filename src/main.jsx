import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/root/Root.jsx';
import Home from './components/home/Home.jsx';
import Login from './components/login/Login.jsx';
import Register from './components/register/Register.jsx';
import Auth from './components/provider/Auth.jsx';
import Orders from './components/oders/Orders.jsx';
import PrivateRoutes from './components/routes/PrivateRoutes.jsx';
import Profile from './components/profile/Profile.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/login',
        element:<Login/>,

      },
      {
        path:'/register',
        element:<Register/>
      },
      {
        path:'/orders',
        element:<PrivateRoutes><Orders/></PrivateRoutes>
      },
      {
        path:'/profile',
        element:<PrivateRoutes><Profile></Profile></PrivateRoutes>

      },
    ]
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<Auth>
  
<RouterProvider router={router} />
</Auth>

  </React.StrictMode>,
)
