import axios from 'axios';
import {createUser} from "../services/UserService"

const API_URL = 'http://localhost:8085/api/users';

export const registerUser = async (userData) => {
  try {
    // const response = await fetch(`${API_URL}/createUser`, {
    //   method: 'POST',
    //   credentials: 'include',
    //   headers: {
    //     'Content-Type': 'text/plain',
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Credentials': 'true',
    //     'Authorization': 'Basic ' + btoa(this.state.deviceSettings.userName + ":" + this.state.deviceSettings.password),
    //   },
    //   body: JSON.stringify(userData),
    // }).then(result => console.log('success====:', result))
    // .catch(error => console.log('error============:', error));

    
    console.log("The user data is :"+ userData);
    const response = 
    createUser(userData).then((response) => {
      console.log(response.data);

    }).catch(error => {
      console.error(error);
    })
    console.log("The user response is :"+ response.data);
    if (!response.ok) {
      throw new Error('Registration failed');
    }
   
    return response.json();
  } catch (error) {
    console.error('onFormSubmit : ', this); 
    throw new Error('Registration failed : ' + error);
  }
};

export const loginUser = async (loginRequest) => {
  try {
    const response = await axios.post(`${API_URL}/login`, loginRequest);
    return response.data; // Assuming your backend returns user data upon successful login
  } catch (error) {
    throw new Error('Login failed'); // You can handle errors in your components
  }
};




