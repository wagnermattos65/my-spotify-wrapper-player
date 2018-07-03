function createMarkup(data) {
  return data.map(album => `
    <div class="list-item" data-album-id="${album.id}">
      <img src="${album.images[2].url}" alt="${album.name}" class="list-img" data-album-id="${album.id}">
      <div class="list-description" data-album-id="${album.id}">
        <div class="list-title" data-album-id="${album.id}">${album.name}</div>
        <div class="list-subtitle" data-album-id="${album.id}">${album.artists[0].name}</div>
      </div>
    </div>`).join('');
}

export default function renderAlbums(data, element) {
  const markup = createMarkup(data);

  element.innerHTML = markup;
 }
