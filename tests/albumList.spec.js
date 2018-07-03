import 'jsdom-global/register';
import { expect } from 'chai';
import renderAlbums from '../src/albumList';

const data = [
  {
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
  },
];


const markup = `
    <div class="list-item" data-album-id="${data[0].id}">
      <img src="${data[0].images[2].url}" alt="${data[0].name}" class="list-img" data-album-id="${data[0].id}">
      <div class="list-description" data-album-id="${data[0].id}">
        <div class="list-title" data-album-id="${data[0].id}">${data[0].name}</div>
        <div class="list-subtitle" data-album-id="${data[0].id}">${data[0].artists[0].name}</div>
      </div>
    </div>`;

const data2 = [
  {
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
  },
  {
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
  },
];

const markup2 = `
    <div class="list-item" data-album-id="${data[0].id}">
      <img src="${data[0].images[2].url}" alt="${data[0].name}" class="list-img" data-album-id="${data[0].id}">
      <div class="list-description" data-album-id="${data[0].id}">
        <div class="list-title" data-album-id="${data[0].id}">${data[0].name}</div>
        <div class="list-subtitle" data-album-id="${data[0].id}">${data[0].artists[0].name}</div>
      </div>
    </div>
    <div class="list-item" data-album-id="${data[0].id}">
      <img src="${data[0].images[2].url}" alt="${data[0].name}" class="list-img" data-album-id="${data[0].id}">
      <div class="list-description" data-album-id="${data[0].id}">
        <div class="list-title" data-album-id="${data[0].id}">${data[0].name}</div>
        <div class="list-subtitle" data-album-id="${data[0].id}">${data[0].artists[0].name}</div>
      </div>
    </div>`;


describe('Albums Handler', () => {
  describe('albumList', () => {
    it('should exist', () => {
      expect(renderAlbums).to.exist;
    });


    it('should create and append the markup given a correct data', () => {
      const element = document.createElement('div');
      renderAlbums(data, element);

      expect(element.innerHTML).to.be.eql(markup);
    })

    it('should create and append the markup when more than one album', () => {
      const element2 = document.createElement('div');
      renderAlbums(data2, element2);

      expect(element2.innerHTML).to.be.eql(markup2);
    })
  });

});
