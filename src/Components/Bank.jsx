import React, { useState } from 'react';
import Login from './Login'; // Assuming you have a separate component for login form
import Register from './Register'; // Assuming you have a separate component for registration form
import './App.css'; // Import the external CSS file

const CompanyInfo = () => {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container"> {/* Apply the 'container' class */}
      <div className="left-div"> {/* Apply the 'left-div' class */}
        {/* Description about the company */}
        <p>Company Description Goes Here</p>
      </div>
      <div className="right-div"> {/* Apply the 'right-div' class */}
        {/* Tab Titles */}
        <div className="tab-container"> {/* Apply the 'tab-container' class */}
          <button onClick={() => handleTabClick('login')}>Login</button>
          <button onClick={() => handleTabClick('registration')}>Registration</button>
        </div>
        {/* Render Login or Registration Form based on active tab */}
        {activeTab === 'login' && <Login />}
        {activeTab === 'registration' && <Register />}
      </div>
    </div>
  );
};

export default CompanyInfo;
