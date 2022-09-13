import axios from 'axios';

// const { REACT_APP_BASE_URL_API } = process.env;

const api = axios.create({
  baseURL: 'http://localhost:3335',
});

export { api };
