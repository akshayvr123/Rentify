import { useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './App.css'
import Home from './Pages/Home'
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Create from './Components/Create/Create';
import View from './Components/PostView/View';
// import Context from './Store/UserContext';
import UserProvider from './Store/UserContext';


function App() {

  return (
    <>
    <UserProvider>
    <Router> 
      <Routes> 
        <Route path="/" element={<Home />} /> {/* Default route (home) */}
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} /> 
        <Route path="/create" element={<Create/>} /> 
        <Route path="/view" element={<View/>} /> 
      </Routes>
    </Router>
    </UserProvider>
     
    </>
  )
}

export default App
