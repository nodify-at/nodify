import axios           from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

const client = axios.create({
    baseURL     : process.env.base_url,
    responseType: 'json'
});

export const axMiddleware = axiosMiddleware(client);
