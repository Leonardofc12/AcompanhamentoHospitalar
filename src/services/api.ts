import axios from 'axios';

const api = axios.create({
  baseURL:'https://localhost:5001/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;