import React from 'react'

import './Footer.css'

import Facebook from '../../assets/SocialIcons/Facebook.png'
import Twitter from '../../assets/SocialIcons/Twitter.png'
import Instagram from '../../assets/SocialIcons/Instagram.png'

const Footer = () => {
    return (
        <div>
            <div className="FooterContainer">
                <div className="left list">
                    <h1>RENTIFY</h1>
                   <a href=""> <p>ABOUT US</p></a>
                   <a href=""> <p>BLOG</p></a>
                    <a href=""><p>SITEMAP</p></a>
                </div>
                <div className="middle list">
                    <h1>MAKE MONEY WITH US</h1>
                   <a href=""><p>RENT PRODUCTS ON RENTIFY</p></a>
                    <a href=""><p>ADVERTIES YOUR PRODUCTS</p></a>
                </div>
                <div className="right list">
                    <h1>NEED HELP</h1>
                    <a href=""><p>CONTACT US</p></a>
                    <a href=""><p>REPORT A BUG</p></a>
                </div>
            </div>
            <hr id='footer_line'/>

            <div className="SocialMediaContainer">
                <h1>FOLLOW US</h1>
                <div className="Icons">
                    <a href=""><img src={Facebook} alt=""  /></a>
                    <a href=""><img src={Twitter} alt=""   /></a>
                    <a href=""><img src={Instagram} alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer