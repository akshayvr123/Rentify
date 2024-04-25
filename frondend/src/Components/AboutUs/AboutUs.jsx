import React from 'react'
import './AboutUs.css'
import LocationIcon from '../../assets/AboutUs/LocationIcon.png'
import Time from '../../assets/AboutUs/Time.png'
import Needs from '../../assets/AboutUs/Needs.png'
import Platform from '../../assets/AboutUs/Platform.png'

const AboutUs = () => {
    return (
        <div>
            <div className="AboutContainer">
                <div className="cardContainer">
                    <div className="left">
                        <img src={LocationIcon} alt=""/>
                    </div>
                    <div className="right">
                        <h1 className='cardText'>You Can Easily Find <br />Your Nearest Rental <br /> Shop</h1>
                    </div>
                </div>
                <div className="cardContainer">
                    <div className="left">
                        <h1 className='cardText'>You Can Save <br /> Your Time With <br />Rentify</h1>
                    </div>
                    <div className="right">
                        <img src={Time} alt="" />
                    </div>

                </div>
                <div className="cardContainer">
                    <div className="left">
                       <img src={Needs} alt="" />
                    </div>
                    <div className="right">
                        <h1 className='cardText'>You Can Get Your <br /> All Rental Needs <br />Here</h1>
                    </div>

                </div>
                <div className="cardContainer ">
                    <div className="left">
                        <h1 className='cardText'>Our User Friendly <br />Platform Offer <br />Better Experience</h1>
                    </div>
                    <div className="right">
                         <img src={Platform} alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutUs