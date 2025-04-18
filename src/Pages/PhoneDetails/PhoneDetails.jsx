import React from 'react'
import { useLoaderData, useParams } from 'react-router'

const PhoneDetails = () => {
    const {id}=useParams();
     const data=useLoaderData();

      const singlPhone=data.find(phone=>phone.id===parseInt(id));
      const {name,image,brand,model,price,storage}=singlPhone;
    console.log(id);
  return (
    <div className='w-full'>
      
        <img src={image} alt="" className=' w-full mx-auto md:w-auto mb-8 ' />
        <div className='flex justify-between'>
            <h1 className='text-6xl font-thin mb-8'>{name}</h1>
               <div className=' space-x-2'>
                <button className='btn btn-primary'>Add cart</button>
               </div>
        </div>
    </div>
  )
}

export default PhoneDetails
