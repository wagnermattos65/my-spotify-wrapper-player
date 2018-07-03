import Spotify from './mySpotify';
import renderAlbums from './albumList';
import renderAlbumInfo from './albumInfo';

const albums = Spotify.search.albums('supercombo');
const albumList = document.getElementById('album-list');

const album = Spotify.album.getAlbum('1M54W6vxFuAxYNrlO7Ocwd');
const albumInfo = document.getElementById('album-info');


albums
  .then(data => renderAlbums(data.albums.items, albumList))
  .catch(err => console.error('Error on search for albums: ',err));

album
  .then(data => renderAlbumInfo(data, albumInfo))
  .catch(err => console.error('Error on get album info: ',err));

