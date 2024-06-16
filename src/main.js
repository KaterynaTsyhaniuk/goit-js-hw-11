'use strict';

import { fetchImages } from './js/pixabay-api.js';
import { displayImages } from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import imageUrl from './img/close.png';
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsDelay: 250,
});
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const loader = document.getElementById('loader');
loader.classList.add('loader');

loader.style.display = 'none';

searchForm.addEventListener('submit', function (event) {
  event.preventDefault();

  clearGallery();
  const searchTerm = searchInput.value.trim();

  if (searchTerm === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search term.',
      position: 'topRight',
      titleColor: '#fff',
      titleSize: '16px',
      backgroundColor: 'red',
      messageColor: 'white',
      iconUrl: imageUrl,
      theme: 'dark',
    });
    return;
  }

  loader.style.display = 'inline-block';

  fetchImages(searchTerm)
    .then(data => {
      loader.style.display = 'none';
      displayImages(data.hits);
      initializeLightbox();
    })
    .catch(error => {
      loader.style.display = 'none';
    });
  lightbox.refresh();
  searchForm.reset();
});

function clearGallery() {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
}
