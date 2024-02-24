import * as React from "react";
import { createRoot } from "react-dom/client";
import App from './App.js';
import './index.css';

// these external files need to be imported as previously we were usig App.js and those were imported in app so now 

import Homepage from './components/Homepage.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'



import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },  
  {
    path: "/login",
    element: <Login/> ,
  },
  {
    path: "/Homepage",
    element: <Homepage/> ,
  },
  {
    path: "/Signup",
    element: <Signup/> ,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);