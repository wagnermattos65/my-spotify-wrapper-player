import { expect } from 'chai';
import mySpotify from '../src/mySpotify';

describe('Spotify Wrapper object', () => {


  describe('Smoke tests', () => {
    describe('for the spotify-wrapper', () => {
      it('should be an object', () => {
        expect(mySpotify).be.an.object;
      });
    });

    describe('for the Album List', () => {
      it('should have album methods', () => {
        expect(mySpotify.album).to.exist;
      });
    });

    describe('for the Search', () => {
      it('should have search methods', () => {
        expect(mySpotify.search).to.exist;
      });
    });
  });
});

