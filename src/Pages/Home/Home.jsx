import React from 'react'
import Hero from '../Hero/Hero'
import { useLoaderData } from 'react-router'
import Phonescontainer from '../../Components/PhoneContain/Phonescontainer';

const Home = () => {
    const data=useLoaderData();
    console.log(data)
  return (
    <div>
       <Hero />
       <Phonescontainer phones={data}></Phonescontainer>
    </div>
  )
}

export default Home
