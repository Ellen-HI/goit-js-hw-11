// createGallery(images). Ця функція повинна приймати масив images, створювати HTML-розмітку для галереї, додавати її в контейнер галереї та викликати метод екземпляра SimpleLightbox refresh(). Нічого не повертає.
// clearGallery(). Ця функція нічого не приймає та повинна очищати вміст контейнера галереї. Нічого не повертає.
// showLoader(). Ця функція нічого не приймає, повинна додавати клас для відображення лоадера. Нічого не повертає.
// hideLoader(). Ця функція нічого не приймає, повинна прибирати клас для відображення лоадера. Нічого не повертає.
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const gallery = document.querySelector('.gallery');
let simpleLight = new SimpleLightbox('.gallery a');
export function createGallery(images) {
  const newItem = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <li class="gallery-item">
      <a href="${largeImageURL}"><img class="img-item" src="${webformatURL}" alt="${tags}" width="360" height="200"/></a>
      <div class="info">
  <p class="info-text">Likes:<br>${likes}</p>
  <p class="info-text">Views:<br>${views}</p>
  <p class="info-text">Comments:<br>${comments}</p>
  <p class="info-text">Downloads:<br>${downloads}</p>
  </div>
  </li> `
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', newItem);
  simpleLight.refresh();
}
export function clearGallery() {
  gallery.innerHTML = '';
}
export function showLoader() {
  document.querySelector('.loader').classList.remove('hidden');
}
export function hideLoader() {
  document.querySelector('.loader').classList.add('hidden');
}
