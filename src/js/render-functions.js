'use strict';
import iziToast from 'izitoast';
const gallery = document.getElementById('gallery');

export function displayImages(images) {
  gallery.innerHTML = '';

  if (images.length === 0) {
    iziToast.info({
      title: 'Info',
      message:
        'Sorry, there are no images matching your search query. Please try again.',
      position: 'topRight',
    });
    return;
  }

  const items = images
    .map(image => {
      return `
      <div class="gallery-box">
      <div class="gallery-image">
      <a href="${image.largeImageURL}">
        <img src="${image.webformatURL}" alt="${image.tags}" width="400" height="280">
      </a>
      </div>
       <div class="image-info">
          <div class="info-box>
          <p class="info-label">Likes:</p>
          <p class="info-value">${image.likes}</p>
          </div>
          <div class="info-box>
          <p class="info-label">Views:</p>
          <p class="info-value">${image.views}</p>
          </div>
          <div class="info-box>
          <p class="info-label">Comments:</p>
          <p class="info-value">${image.comments}</p>
          </div>
          <div class="info-box>
          <p class="info-label">Downloads:</p>
          <p class="info-value">${image.downloads}</p>
          </div>
        </div>
      </div>
    `;
    })
    .join('');

  gallery.innerHTML = items;
}
