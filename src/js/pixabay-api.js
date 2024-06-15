const API_KEY = '44335332-ac36bc3e12fb03490a95e8e95';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImages(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  const url = `${BASE_URL}?${params}`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch images');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error fetching images:', error);
      throw error;
    });
}
