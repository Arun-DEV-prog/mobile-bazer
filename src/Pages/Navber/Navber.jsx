import React from 'react'
import { Bookmark, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router';


const Navber = () => {
  return (
    <div>
       <div className="navbar bg-base-100 shadow-sm pl-5 pr-5">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link to='/'>Home</Link></li>
        
        <li><Link to='/about'>About</Link></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
  
         <Link className="btn btn-ghost text-2xl italic text-cyan-400" to='/'>MobileBazar</Link>
  
  </div>
  <div className="navbar-end">
   <ul className=' flex gap-5'>
         <li className=' hidden md:block'>
         <Link to='/'>Home</Link>
        

         </li>
        
        <li className=' hidden md:block'>
      
        
        <Link to='/about'>About</Link>
            </li>
         <li>  <ShoppingCart /></li>
         <li>  <Bookmark></Bookmark></li>
   </ul>
  </div>
</div>
    </div>
  )
}

export default Navber
