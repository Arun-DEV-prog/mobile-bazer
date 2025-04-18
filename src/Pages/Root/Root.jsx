import React from 'react'
import Navber from '../Navber/Navber'
import { Outlet } from 'react-router'

const Root = () => {
  return (
    <div>
       <Navber />
       <Outlet></Outlet>
    
    </div>
  )
}

export default Root
