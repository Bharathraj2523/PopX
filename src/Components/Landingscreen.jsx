import React from 'react'
import { Link } from 'react-router-dom'
import './Landingscreen.css'; 

const Landingscreen = () => {
  return (
    <div id='body'>
      <div className="landing">
      <h1 id='welcome'>Welcome to PopX</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <Link to="/register">
        <button className="first">Create Account</button>
      </Link>
      <Link to="/">
        <button className="second">Already Registered? Login</button>
      </Link>
    </div>
    </div>
  )
}

export default Landingscreen
