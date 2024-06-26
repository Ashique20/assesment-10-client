import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Components/Pages/Home/Home.jsx';
import AddArt from './Components/AddArt/AddArt.jsx';
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx';
import Login from './Components/AuthenticationCompos/Login.jsx';
import Register from './Components/AuthenticationCompos/Register.jsx';
import PrivateRoute from './Components/AuthenticationCompos/PrivateRoute.jsx';
import CraftDetail from './Components/Pages/Arts/CraftDetail.jsx';
import AllArt from './Components/AllArt/AllArt.jsx';
import MyArt from './Components/MyArt/MyArt.jsx';
import Update from './Components/Pages/Update/Update.jsx';
import CategorieDetail from './Components/Pages/CategorieDetail/CategorieDetail.jsx';
import DrawDetail from './Components/Pages/DrawDetail/DrawDetail.jsx';
import NotFound from './Components/NotFound.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[{
      path:'/',
      element:<Home></Home>
     
    },
    {
      path:'/add',
      element:<PrivateRoute><AddArt></AddArt></PrivateRoute>
    },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/register',
      element:<Register></Register>
    },
    {
      path:'/arts/:id',
      element:<CraftDetail></CraftDetail>,
      loader:({params})=>fetch(`https://assesment-server-one.vercel.app/arts/${params.id}`)
      
    },
    {
      path:'/update/:id',
      element:<Update></Update>,
      loader:({params})=>fetch(`https://assesment-server-one.vercel.app/arts/${params.id}`)
      
    },
    {
      path:'/allArt',
      element:<PrivateRoute><AllArt></AllArt></PrivateRoute>,
      loader:()=>fetch(`https://assesment-server-one.vercel.app/arts`)
      
    },
    {
      path:'/myArt',
      element:<PrivateRoute><MyArt></MyArt></PrivateRoute>,
      
    },
    {
      path:'/craft/:name',
      element:<PrivateRoute><CategorieDetail></CategorieDetail></PrivateRoute>,
      loader:()=>fetch('https://assesment-server-one.vercel.app/category')
      
    },
    {
      path:'/drawDetail/:id',
      element:<PrivateRoute><DrawDetail></DrawDetail></PrivateRoute>,
      loader:({params})=>fetch(`https://assesment-server-one.vercel.app/craft/${params.id}`)
      
    },
    {
      path: '*', 
      element: <NotFound></NotFound>
    }
]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>

    </AuthProvider>
  </React.StrictMode>,
)
