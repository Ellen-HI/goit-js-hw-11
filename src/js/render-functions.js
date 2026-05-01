// створи екземпляр SimpleLightbox
// let gallery = new SimpleLightbox('.gallery a');
// gallery.on('show.simplelightbox', function () {
//   // Do something…
// });
// createGallery(images). Ця функція повинна приймати масив images, створювати HTML-розмітку для галереї, додавати її в контейнер галереї та викликати метод екземпляра SimpleLightbox refresh(). Нічого не повертає.
// clearGallery(). Ця функція нічого не приймає та повинна очищати вміст контейнера галереї. Нічого не повертає.
// showLoader(). Ця функція нічого не приймає, повинна додавати клас для відображення лоадера. Нічого не повертає.
// hideLoader(). Ця функція нічого не приймає, повинна прибирати клас для відображення лоадера. Нічого не повертає.

export function createGallery(images) {
  // images.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => `
  //     <div class="gallery">
  //     <a href="images/image1.jpg"><img src="images/thumbs/thumb1.jpg" alt="" title=""></a>
  //     <a href="images/image2.jpg"><img src="images/thumbs/thumb2.jpg" alt="" title="Beautiful Image"></a>
  // </div>
  // `
}

// function createMarkup(arr) {
//     return arr.map(({ date, day: { avgtemp_c, condition: { text, icon } } }) => `
//         <li class="weather-card">
//             <img src="${icon}" alt="${text}" class="weather-icon"/>
//             <h2 class="weather-date">${date}</h2>
//             <h3 class="weather-text">${text}</h3>
//             <h3 class="temperature">${avgtemp_c}°C</h3>
//         </li>
//     `).join("");
// }
