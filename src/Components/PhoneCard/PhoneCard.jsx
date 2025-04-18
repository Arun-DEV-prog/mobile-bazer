import React from 'react'
import { Link } from 'react-router'

const PhoneCard = ({phone}) => {
   
  return (
    <div className=' '>
      <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={phone.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{phone.name}</h2>
    <p>{phone.description}</p>
    <div className="card-actions justify-end">
       <Link to={`/phondetails/${phone.id}`}>
       <button  className="btn btn-primary">View Details</button>
       </Link>
    </div>
  </div>
</div>
    </div>
  )
}

export default PhoneCard
