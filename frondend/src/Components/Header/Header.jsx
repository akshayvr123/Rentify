import React, { useContext } from 'react'
import './Header.css'
// import Cart from '../../assets/Header/Cart.svg'
import Search from '../../assets/Header/Search.svg'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../Store/UserContext';

const Header = () => {
    const {user,setUser}=useContext(UserContext)
    return (
        <div>
            <div className="navbar">

                <div className="leftSection">
                 <h1 >RENTIFY</h1>
                </div>
                <div className="middleSection">
                    <div className='textConatainer'>
                        <img src={Search} alt="" id='imgSearch' />
                        <input type="text" placeholder='Search for any product,car,house...' className='productSearch' />
                    </div>
                </div>
                <div className="rightSection">
                    {
                        user ?<Link to="/create"> <button id='plus' >  <FontAwesomeIcon icon={faPlus} /> Rent</button></Link> :""
                    }
                      
                 {user ? <span className='login'>Welcome {user.name}</span>:  <Link to="/login"><span className='login'>Login</span></Link>} 
                 {user ? <span onClick={()=>{setUser('')}}>Logout</span>:''}
                 
                  
                   <FontAwesomeIcon icon={faUser} />
                   
                </div>
            </div>
        </div>
    )
}

export default Header