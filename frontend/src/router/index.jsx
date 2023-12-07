import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import Users from "../pages/Users.jsx";
import Register from "../pages/Register.jsx";
import NotFound from "../pages/NotFound.jsx";
import React from "react";
import Layout from "../layouts/Layout.jsx";

export const router = createBrowserRouter([
    {
        element:<Layout/>,
        children:[
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/login',
                element: <Login/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/users',
                element:<Users/>
            },
            {
                path:'*',
                element:<NotFound/>
            }
        ]
    },

])
