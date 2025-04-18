import React, { useEffect, useState } from 'react'
import PhoneCard from '../PhoneCard/PhoneCard'

const Phonescontainer = ({phones}) => {
    const [displayphones,setDisplayphones]=useState([]);
    const [showAll,setShowAll]=useState(false);

    useEffect(()=>{
        if(showAll){
             setDisplayphones(phones);
        }else{
            setDisplayphones(phones.slice(0,6));
        }
    },[showAll,phones])
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pl-20 pr-20 gap-20'>
        {
            displayphones.map((phone)=><PhoneCard key={phone.id} phone={phone}></PhoneCard>)
        }

        <button onClick={()=>{setShowAll(prv=>!prv)
            if(showAll){
                window.scrollTo(0,0);
         } } } className='btn btn-primary'>{showAll ? "Show less": "Show All"}</button>

    </div>
  )
}

export default Phonescontainer
