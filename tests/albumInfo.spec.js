import 'jsdom-global/register';
import { expect } from 'chai';

import renderAlbumInfo from '../src/albumInfo';

describe('Albums Info', () => {
  const data = {
    "album_type": "album",
    "artists": [
      {
        "name": "Supercombo",
      }
    ],
    "id": "1M54W6vxFuAxYNrlO7Ocwd",
    "images": [
      {
        "height": 640,
        "url": "https://i.scdn.co/image/c8c4a6861b64527b4038ef7de61810993f557f1b",
        "width": 640
      },
      {
        "height": 300,
        "url": "https://i.scdn.co/image/c5de52dc1d4b7c01dd386e037fb5493ed3fbd9fe",
        "width": 300
      },
      {
        "height": 64,
        "url": "https://i.scdn.co/image/0f36fc26e60517ddc1abf725c746b2617a3d797f",
        "width": 64
      }
    ],
    "name": "Amianto",
    "type": "album",
    "tracks": {
      "total": 12,
    },
  };

  const markup = `
    <img src="https://i.scdn.co/image/c8c4a6861b64527b4038ef7de61810993f557f1b" alt="Amianto" class="album-image">
    <p class="album-title">Amianto</p>
    <p class="album-artist">Supercombo</p>
    <p class="album-counter">12 Musicas</p>`;

  it('should create and append the markup given a correct data', () => {
    const element = document.createElement('div');
    renderAlbumInfo(data, element);

    expect(element.innerHTML).to.be.eql(markup);
  });
});
