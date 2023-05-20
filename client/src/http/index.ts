import axios from 'axios';

const STRAPI_BASE_URL = 'http://127.0.0.1:1337';
  

const server = axios.create({
  baseURL: `${STRAPI_BASE_URL}/api`,
});

export { server, STRAPI_BASE_URL  };
