import axios from 'axios';

export const http = () => {
  return axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    headers: {
      'Content-type': 'application/json'
    }
  });
};
