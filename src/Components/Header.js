import React from 'react';
import './App.css'; // Import the external CSS file

const Header = ({ companyName, onLogout }) => {
  return (
    <header className="header"> {/* Apply the 'header' class */}
      <div className="left-container"> {/* Apply the 'left-container' class */}
        <h1>{companyName}</h1>
      </div>
      <div className="right-container"> {/* Apply the 'right-container' class */}
        <button onClick={onLogout}>Logout</button>
      </div>
    </header>
  );
};

export default Header;
