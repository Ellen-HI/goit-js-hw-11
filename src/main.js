// У файлі main.js напиши всю логіку роботи додатка.
// Виклики нотифікацій iziToast, усі перевірки на довжину масиву в отриманій відповіді робимо саме в цьому файлі.
//  Імпортуй в нього функції із файлів pixabay-api.js та render-functions.js та викликай їх у відповідний момент.
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const gallery = document.querySelector('.gallery');
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getImagesByQuery } from './js/pixabay-api';
const form = document.querySelector('.form');
form.addEventListener('submit', handleSubmit);

export function handleSubmit(event) {
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
  getImagesByQuery(valueSearch)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          color: 'red',
        });
        return;
      }
      gallery.insertAdjacentHTML('beforeend', createGallery(data.hits));
    })
    .catch(error => {
      iziToast.show({
        message: 'Error! Try again later',
        color: 'red',
      });
      console.error(error);
    })
    .finally(event.target.reset());
}
