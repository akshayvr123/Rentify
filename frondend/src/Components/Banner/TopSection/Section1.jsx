import React from 'react'
import './Section1.css'

import LocationDot from '../../../assets/Banner/Section/LocationDot.png'
import LocationArrow from '../../../assets/Banner/Section/LocationArrow.png'

const Section1 = () => {
  return (
    <div>
        <div className="Section1Conatainer">
            <div className="left-Section">
              <h1 className='title'>YOUR ULTIMATE <br />RENTAL DESTINATION</h1>
            </div>
            <div className="right-Section">
              <div className="textContainer">
                <img src={LocationDot} alt="" id='Dot'/>
                <input type="text" placeholder='Enter location' className='locationSearch' />
                <img src={LocationArrow} alt="" id='Arrow'/>
              </div>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default Section1