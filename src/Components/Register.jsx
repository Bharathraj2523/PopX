import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    password: "",
    company: "",
  });

  const navigate = useNavigate(); // This should work now

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem("usersdata")) || [];

    
    const userExists = existingUsers.some(user => user.email === formData.email);
    if (userExists) {
      alert("A user with this email already exists.");
      return; 
    }

    
    existingUsers.push(formData);

    
    localStorage.setItem('usersdata', JSON.stringify(existingUsers));

    
    setFormData({
      fullname: "",
      phone: "",
      email: "",
      password: "",
      company: "",
    });

    
    alert("Account created successfully!");
    navigate("/login"); 
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
        <h1 id='create'>Create Your PopX Account</h1>

        <form onSubmit={handleSubmit}>
          <div className='inner-form'>
            <label>Full Name</label>
            <input 
              type="text" 
              name="fullname" 
              value={formData.fullname}
              onChange={handleChange}
              placeholder='Bharath'
              required
            />
          </div>
          <div className='inner-form'>
            <label>Phone number</label>
            <input 
              type="number" 
              name="phone" 
              value={formData.phone}
              onChange={handleChange}
              placeholder='8398492838'
              required
            />
          </div>
          <div className='inner-form'>
            <label>Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              placeholder='***@gmail.com'
              required
            />
          </div>
          <div className='inner-form'>
            <label>Password</label>
            <input 
              type="password" 
              name="password" 
              value={formData.password}
              onChange={handleChange}
              placeholder='*****'
              required
            />
          </div>
          <div className='inner-form'>
            <label>Company name</label>
            <input 
              type="text" 
              name="company" 
              value={formData.company}
              onChange={handleChange}
              placeholder='Educase'
            />
          </div>
          <button type="submit" className='submit-btn'>
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
