import React, { useContext, useEffect, useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from 'axios'; // Assuming axios is imported
import { UserContext } from '../../Store/UserContext';

const Signup = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const {user,setUser}=useContext(UserContext)

 
  const handleSubmit = async (e) => {
    e.preventDefault();

try{

  const res = await axios.post("http://localhost:3000/api/user", {
    name: userName,
    email: email,
    password: password,
  });
  

  if(res.data){
    setUser(res.data)
    
    navigate("/")
  }


  
}catch(err){
  console.log(err.message);
}
};


  return (
    <>
      <div className="nav">
        <h1>RENTIFY</h1>
      </div>
      <div className="signupParentDiv">
        <img  alt="" width="200px" height="200px" />
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            id="username"
            name="username"
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            name="email"
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            name="password"
          />
          <br />
          <br />
          <button type="submit">Signup</button>
        </form>
        <br />
        <Link to="/login">
          Login
        </Link>
      </div>
    </>
  );
};

export default Signup;
