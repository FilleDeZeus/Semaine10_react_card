import React from 'react'
import './public/css/cards.css'

export const Cards = ({nom,verre,image,alcool,}) => {

  return (
    <div className="card">
      <div className="image" style={{backgroundImage: image}}></div>
    <div className='text'>
      <h1>{nom}</h1>
      <p>{verre}</p>
      <span>{alcool}</span>
    </div>
      <button>DETAILS</button>
</div>
  )
}
