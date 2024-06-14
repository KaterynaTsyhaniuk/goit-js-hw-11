'use strict';
import iziToast from 'izitoast';
import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';

document.getElementById('search-form').addEventListener('submit', event => {
  event.preventDefault();
  const searchInput = document.getElementById('search-input');
  const query = searchInput.value.trim();

  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Search query cannot be empty!',
    });
    return;
  }

  const loader = document.getElementById('loader');
  loader.style.display = 'block';

  try {
    const data = fetchImages(query);
    if (data.hits.length === 0) {
      iziToast.info({
        title: 'Info',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    } else {
      renderImages(data.hits);
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: error.message,
    });
  } finally {
    loader.style.display = 'none';
  }

  searchInput.value = '';
});
