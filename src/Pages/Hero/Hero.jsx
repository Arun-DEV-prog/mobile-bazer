import React from 'react'
import bannerimg from '../../assets/banner.png'

const Hero = () => {
  return (
    <div className=' py-12'>
       <div>
         <img className=' w-full  mx-auto md:w-auto md:max-w-md' src={bannerimg} alt="" />
       </div>
        <div className=' w-full  mx-auto md:max-w-[800px] px-10 py-10'>
             <h1 className=' text-2xl font-bold py-5'>
             Browse, Search, View, Buy
             </h1>
             <p>
             Best place to browse, search, view details and purchase of top
             flagship phones <br /> of the current time - FlagshipFaceOff
             </p>
             <form className=' flex items-center'>
                 <input type="text" placeholder='search by name' className=' w-2/3 h-12 px-4 mb-3 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:outline-none focus:shadow-outline' />
                 <a href="#_" class="relative inline-block text-lg group">
               <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
        <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
        <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
        <span class="relative">search</span>
    </span>
    <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</a>
             </form>
        </div>
       
    </div>
  )
}

export default Hero
