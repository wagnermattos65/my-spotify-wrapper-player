export default function renderAlbumInfo(data, element) {
  const markup = `
    <img src="${data.images[0].url}" alt="${data.name}" class="album-image">
    <p class="album-title">${data.name}</p>
    <p class="album-artist">${data.artists[0].name}</p>
    <p class="album-counter">${data.tracks.total} Musicas</p>`;

  element.innerHTML  = markup;
};
