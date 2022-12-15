import axios, { AxiosRequestConfig } from 'axios';
import { API_URL } from '../constants';

const http = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const get = async (url: string, params?: AxiosRequestConfig) => {
  const response = await http.get(url, params);
  return response;
};

const post = async <T>(url: string, data?: T, params?: AxiosRequestConfig) => {
  const response = await http.post(url, data, params);
  return response;
};

const put = <T>(url: string, data?: T, params?: AxiosRequestConfig) => {
  const response = http.put(url, data, params);
  return response;
};

export { get, post, put };
