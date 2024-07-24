// src/components/RegistrationForm.js
import React, { useState } from 'react';
import { registerUser } from '../services/api';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const history = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setfirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
 const [email, setEmail] = useState('');
  const [address, setAddess] = useState('');
  const [success, setSuccess] = useState(false);
  const [occupation, setOccupation] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [gender, setGender] = useState('');
  const [nationality, setNationality] = useState('');
 
  const register = {
    username: username,
    password: password,
    emailId: email,
    contactNumber: phoneNumber,
    userProfileDto: {
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      address: address,
      occupation: occupation,
      maritalStatus: maritalStatus,
      nationality: nationality
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser({register});
      setSuccess(true);
      setTimeout(() => {
        history('/');
      }, 5000);
      
    } catch (error) {
      console.error('handleSubmit : ', this);
      console.error('Registration failed:', error);
    }
  };

  return (
    <div>
      {success ? (
        setTimeout(() => {
        <div className="registration-message">
        Registration successful. Please login.
      </div>
      }, 5000)
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Username:
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          </label>
          <label>Password:
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          </label>
          <label>First Name:
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
          />
          </label>
          <label>Last Name:
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          </label>
          <label>Phone Number:
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setphoneNumber(e.target.value)}
          />
          </label>
          <label>Email:
            <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          </label>
          <label>Address:
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddess(e.target.value)}
          />
          </label>
          <label>Occupation:
          <input
            type="text"
            placeholder="Occupation"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
          />
          </label>
          <label>MaritalStatus:
          <input
            type="text"
            placeholder="MaritalStatus"
            value={maritalStatus}
            onChange={(e) => setMaritalStatus(e.target.value)}
          />
          </label>
          <label>Gender:
          <input
            type="text"
            placeholder="Gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
          </label>
          <label>Nationality:
          <input
            type="text"
            placeholder="Nationality"
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
          />
          </label>
          <button type="submit">Register</button>
        </form>
      )}
      
    </div>
  );
};

export default Register;
