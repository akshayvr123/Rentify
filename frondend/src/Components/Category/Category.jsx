import React, { useState } from 'react'
import './Category.css'


import CategoryCard from '../CategoryCard/CategoryCard';


const Category = () => {


  return (
    <div>
      <div className="CategoryContainer">

        <div className="heading">
          <span id='CategoryHeading'>Category</span>
          <span>View more</span>
        </div>

        <CategoryCard />

      </div>
    </div>
  )
}

export default Category