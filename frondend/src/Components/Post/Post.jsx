import React from 'react'
import './Post.css'

import Photo from '../../assets/Banner/CAR.png'
import Heart from '../../assets/Post/Heart';
import { Link } from 'react-router-dom';
// import Category from '../Category/Category';


const Post = () => {
  return (
    <div>
      <div className="PostContainer">

        {/* <Category /> */}
<Link to="/view">
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={Photo} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 5656</p>
              <p className="kilometer">  Computer</p>
              <span className="name">Category: Electronics</span>
            </div>
            <div className="date">
              <span>19/02/20024</span>
            </div>
          </div>

          {/* })

          } */}

        </div>

        </Link>
      </div>
    </div>
  )
}

export default Post