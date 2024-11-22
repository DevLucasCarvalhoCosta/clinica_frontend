import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/', // Substitua pela URL do backend
});

export default api;
