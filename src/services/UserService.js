import axios from "axios";

const API_URL = 'http://localhost:8085/api/users';

export const createUser = (user) => axios.post(API_URL + '/createUser', user);