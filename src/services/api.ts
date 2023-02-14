import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs',
});
