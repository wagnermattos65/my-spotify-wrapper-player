import Spotify from './mySpotify';
import renderAlbums from './albumList';

const albumList = document.getElementById('album-list');
const searchInput = document.getElementById('search-input');
const searchForm = document.getElementById('search-form');

function makeRequest() {
  Spotify.search.albums(searchInput.value)
  .then(data => renderAlbums(data.albums.items, albumList))
  .catch(err => console.error('Error on search for albums: ',err));
}

export default function searchEnterTrigger() {
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    makeRequest();
  })
}
