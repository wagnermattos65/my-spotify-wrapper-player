import { expect} from 'chai';
import convertToHumanTime from '../src/utils';

describe('Utils', () => {
  describe('Convert from ms to human format time', () => {
    it('should receive 0ms and convert to 0:00', () => {
      expect(convertToHumanTime(0)).to.be.eql('0:00');
    });

    it('should receive 1000ms and convert to 0:01', () => {
      expect(convertToHumanTime(1000)).to.be.eql('0:01');
    });

    it('should receive 10000ms and convert to 0:10', () => {
      expect(convertToHumanTime(10000)).to.be.eql('0:10');
    });

    it('should receive 60000ms and convert to 1:00', () => {
      expect(convertToHumanTime(60000)).to.be.eql('1:00');
    });
  });
});

