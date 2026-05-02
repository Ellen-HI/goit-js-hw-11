// У файлі main.js напиши всю логіку роботи додатка.
// Виклики нотифікацій iziToast, усі перевірки на довжину масиву в отриманій відповіді робимо саме в цьому файлі.
//  Імпортуй в нього функції із файлів pixabay-api.js та render-functions.js та викликай їх у відповідний момент.
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector('.form');
form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const valueSearch = event.target.elements['search-text'].value
    .toLowerCase()
    .trim();
  if (!valueSearch) {
    iziToast.show({
      message: 'Put value',
      color: 'red',
      position: 'bottomRight',
      overlayColor: 'rgba(0, 0, 0, 0.6)',
    });
    return;
  }
  clearGallery();
  showLoader();
  getImagesByQuery(valueSearch)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          color: 'blue',
          position: 'topCenter',
        });
        return;
      }
      createGallery(data.hits);
    })
    .catch(error => {
      iziToast.show({
        message: 'Error! Try again later',
      });
      console.log(error);
    })
    .finally(() => {
      hideLoader();
      event.target.reset();
    });
}
