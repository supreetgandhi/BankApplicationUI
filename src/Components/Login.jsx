import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/api';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await loginUser({ username, password });
      // Redirect to Home component with user details
      sessionStorage.setItem('username', user.username);
      console.log(sessionStorage.getItem('username'))
      navigate('/home', { user });
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>User name:
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
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
