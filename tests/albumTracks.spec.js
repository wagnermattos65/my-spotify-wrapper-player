import 'jsdom-global/register';
import { expect } from 'chai';

import renderAlbumTracks from '../src/albumTracks';
import convertToHumanTime from '../src/utils';

describe('Album Tracks', () => {
  const data = [
    {
      "preview_url": "https://p.scdn.co/mp3-preview/d00f1e87342b38928d386062a24d897facf59ea8?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number": 1,
      "name":"Matagal",
      "duration_ms": 128314,
    },
  ];

  const data2 = [
    {
      "preview_url": "https://p.scdn.co/mp3-preview/d00f1e87342b38928d386062a24d897facf59ea8?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number": 1,
      "name":"Matagal",
      "duration_ms": 128314,
    },
    {
      "preview_url": "https://p.scdn.co/mp3-preview/5c4e0ce7bbe082995eb99ed32423817306382e63?cid=774b29d4f13844c495f206cafdad9c86",
      "track_number": 2,
      "name":"Campo de Força",
      "duration_ms": 219095,
    },

  ];
  const markup = `
    <div class="music" data-track-preview="${data[0].preview_url}">
      <p class="music-number">${data[0].track_number}</p>
      <p class="music-title">${data[0].name}</p>
      <p class="music-duration">${convertToHumanTime(data[0].duration_ms)}</p>
    </div>`;

    const markup2 = `
    <div class="music" data-track-preview="${data2[0].preview_url}">
      <p class="music-number">${data2[0].track_number}</p>
      <p class="music-title">${data2[0].name}</p>
      <p class="music-duration">${convertToHumanTime(data2[0].duration_ms)}</p>
    </div>
    <div class="music" data-track-preview="${data2[1].preview_url}">
      <p class="music-number">${data2[1].track_number}</p>
      <p class="music-title">${data2[1].name}</p>
      <p class="music-duration">${convertToHumanTime(data2[1].duration_ms)}</p>
    </div>`;



  it('should create and append the markup given a correct data', () => {
    const element = document.createElement('div');
    renderAlbumTracks(data, element);

    expect(element.innerHTML).to.be.eql(markup);
  });

  it('should create and append the markup when more than 1 tracks', () => {
    const element2 = document.createElement('div');
    renderAlbumTracks(data2, element2);

    expect(element2.innerHTML).to.be.eql(markup2);
  });
} );

