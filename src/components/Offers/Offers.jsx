import React from 'react'
import './Offers.css'
import exclusive_image from '../Asset/exclusive_image.png'
export const Offer = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exculsive</h1>
        <h1>Offers for you</h1>
        <p>ONLY ON  BEST SELLERS PRODUCT</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />

      </div>

    </div>
  )
}
