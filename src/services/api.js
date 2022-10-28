import axios from 'axios';

const API_KEY = '29507685-ce40eb09955da3524e05d8b65';
const BASE_URL = 'https://pixabay.com/api/';

export const getImages = (imageQuery, page) => {
  return axios.get(
    `${BASE_URL}?q=${imageQuery}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`
  );
};