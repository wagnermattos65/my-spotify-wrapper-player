function createMarkup(data) {
  return data.map(album => `
    <div class="list-item">
      <img src="${album.images[2].url}" alt="${album.name}" class="list-img">
      <div class="list-description">
        <div class="list-title">${album.name}</div>
        <div class="list-subtitle">${album.artists[0].name}</div>
      </div>
    </div>`).join('');
}

export default function renderAlbums(data, element) {
  const markup = createMarkup(data);

  element.innerHTML = markup;
 }
