import axios from 'axios';
import { createGallery } from './render-functions';

const URL = 'https://pixabay.com/api/';
const API_KEY = '55674767-a2ab9f6f3f74198417133d166';

export function getImagesByQuery(query = '') {
  return axios
    .get(URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data);
}
