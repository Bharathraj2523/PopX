import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const existingUsers = JSON.parse(localStorage.getItem("usersdata")) || [];

    
    const user = existingUsers.find(user => user.email === formData.email && user.password === formData.password);
    
    if (user) {
      localStorage.setItem('logindata', JSON.stringify(user));
      alert("Login successful!");
      navigate("/profile");
    } else {
      alert("Invalid email or password");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div id='body'>
      <div className='form-container'>
        <h1>Signin to your PopX account</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <form onSubmit={handleSubmit}>
          <div className='innerform'>
            <label>Email address</label>
            <input
              type="email"
              name="email"
              value={formData.email}  
              onChange={handleChange}  
              placeholder='***@gmail.com'
              required
            />
          </div>
          <div className='innerform'>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}  
              onChange={handleChange}  
              placeholder='****'
              required
            />
          </div>
          <button type="submit" className='submit-btn'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
