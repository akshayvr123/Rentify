import React from 'react'

import './View.css'

import image from '../../assets/Banner/CAR.png'
import Header from '../Header/Header'

const View = () => {
  return (
    <div>
        <Header/>
        <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={image}
          alt=""
        />
       
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p className='price'>&#x20B9; 50000 </p>
          <span className='pText'>Name</span>
          <p className='pText'>Category</p>
          <span className='pText'>18/2/2023</span>
        </div>

        <div className="contactDetails">
          <p className='seller'>Seller details</p>
          <p className='sText'>Nmae</p>
          <p className='sText'>123456789</p>
        </div>
     

      </div>
    </div>
    </div>
  )
}

export default View