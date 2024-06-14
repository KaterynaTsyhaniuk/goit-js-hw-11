'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const API_KEY = '44335332-ac36bc3e12fb03490a95e8e95';
const BASE_URL = 'https://pixabay.com/api/';

function fetchImages(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  const url = `${BASE_URL}?${params}`;
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch images');
    }
    return response.json();
  });
}

function imageTemplate(image) {
  return `<a href ="${image.largeImageURL}" data-lightbox="gallery-images" data-title="${image.tags}">
    <img src="${image.webformatURL}" alt="${image.tags}" class="gallery-image"</a>`;

  // return `<div class="image-container">
  // <img src="${image.webformatURL}" alt="${image.tags}" class="gallery-image"><div class="image-info">
  // <p>Likes:${image.likes}</p>
  // <p>Views:${image.views}</p>
  // <p>Comments:${image.comments}</p>
  // <p>Downloads:${image.downloads}</p></div></div>`;
}

// /////////////////////функція відображення зображ в html
function renderImages(images) {
  const gallery = document.getElementById('gallery');
  if ('!gallery') {
    console.error('Gallery element not found');
    return;
  }
  gallery.innerHTML = images.map(image => imageTemplate(image).join(''));

  const lightbox = new simpleLightbox('.gallery a', {
    captionsData: 'title',
    captionDelay: 250,
    closeText: 'Закрити',
    navText: ['<', '>'],
  });
}

///////додамо подію для форми пошуку

document.getElementById('search-form').addEventListener('submit', event => {
  event.preventDefault();
  const query = document.getElementById('search-input').value.trim();
  if (query === '') {
    console.log('Please enter a search query');
    iziToast.warning({
      title: 'Error',
      message: 'Please enter a search query',
    });
    return;
  }

  fetchImages(query)
    .then(data => {
      if (data.hits.length === 0) {
        console.log(
          'Sorry there are no images matching you search query. Rlease try again!'
        );
        iziToast.info({
          title: 'Info',
          message:
            'Sorry there are no images matching you search query. Rlease try again!',
        });
      } else {
        const firstImage = data.hits[0];

        console.log(firstImage);
        renderImages(data.hits);
      }
    })
    .catch(error => {
      console.error('Error:', error);
      iziToast.error({
        title: 'Error',
        message: 'Failed to fetch images.Please try again later.',
      });
    });
});
