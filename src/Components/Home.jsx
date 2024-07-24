import React, { useState,useEffect } from 'react';
import './App.css'; // Import the external CSS file
import { loginUser } from '../services/api';



const Home = () => {
  const [userDetails, setUserDetails] = useState({
    userId:'',
    username:'',
    fullName:'',
    phoneNumber:'',
    email:'',
    address:'',
    bankAccounts: []  
  });
 
  useEffect(() => {
    const currentUser=sessionStorage.getItem('username')
    console.log(currentUser)
    const fetchUserData = async () => {
      try {
      
        const user = await loginUser(currentUser);
        setUserDetails(user);
      } catch (error) {
        // Handle error
      }
    };
    fetchUserData();
  }, []);
  

  return (
    
    <div className="home-container">
      {userDetails ? (
       <div className="user-details">
          <h1>Welcome! {userDetails.username}</h1>
        <h3>Full Name:{userDetails.fullName}</h3>
        <h3>Phone Number:{userDetails.phoneNumber}</h3>
        <h3>Email:{userDetails.email}</h3>
        <h3>Address:{userDetails.address}</h3>
        </div>
         ) : (
          <p>Loading...</p>
        )}
    
       
       <div className="bank-details">
       {/* Bank Details */}
        <h2>Bank Details</h2>
       
        <button className="add-account-button" >
          Add Account
       </button>
       </div>
      <div className="actions">
        {/* Add Money, Send Money, and Transactions Buttons */}
        <button>Add Money</button>
        <button>Send Money</button>
        <button>Transactions</button>
     </div>
       
    </div>
    
  );
};

export default Home;


