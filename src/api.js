import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost",
  headers: {
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    "Access-Control-Allow-Headers": "X-Requested-With, access-control-allow-methods , Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding",
  }
});

export default api;