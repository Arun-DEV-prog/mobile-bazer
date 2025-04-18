import React from 'react'
import {
    createBrowserRouter,
   
  } from "react-router";
import Root from '../Pages/Root/Root';
import About from '../Pages/About/About';
import Home from '../Pages/Home/Home';
import PhoneDetails from '../Pages/PhoneDetails/PhoneDetails';
 export const router=createBrowserRouter([
        {
            path:'/',
            Component:Root,
            errorElement:<p>Error 404</p>,
            children:[
                {
                    index:true,
                    path:'/',
                    loader:()=>fetch('../Phones.json'),
                    Component:Home
                },
                {
                    path:'/about',
                    Component:About
                }
                ,{
                    path:'/phondetails/:id',
                    loader:()=>fetch('../Phones.json'),
                    Component: PhoneDetails
                }
            ]
        }
  ])

