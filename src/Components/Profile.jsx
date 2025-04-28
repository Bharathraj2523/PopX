import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Profile.css"
const Profile = () => {
  const [data, setData] = useState({
    fullname: "Marry Doe", // Default values for testing
    email: "Marry@Gmail.Com",
    // ... other fields
  });
  
  const navigate = useNavigate();
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("logindata"));
    if (!user) {
      navigate("/login");
    } else {
      setData(user);
    }
  }, [navigate]);

  return (
    <div id='body'>
      <div className="profile-header">
        <h1>Account Settings</h1>
      </div>
      <div className="profile-content">
        <div className="image-container">
          <div className="profile-image-placeholder">
            {data.fullname.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="camera-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" stroke="currentColor"/>
              <circle cx="12" cy="13" r="4" stroke="currentColor"/>
            </svg>
          </div>
        </div>
        <div className="profile-info">
          <h2>{data.fullname}</h2>
          <p>{data.email}</p>
        </div>
      </div>
      <p className="profile-bio">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
    </div>
  );
};

export default Profile;