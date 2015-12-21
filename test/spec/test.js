(function () {
  'use strict';

  describe('Check city name', function () {
      it('should be incorrect if city name is empty', function () {
        expect(isCityNameIncorrect('')).toBe(true);
      });
	  it('should be incorrect if city name is too short', function () {
        expect(isCityNameIncorrect('s')).toBe(true);
      });
	  it('should be correct if city name length is more than 2', function () {
        expect(isCityNameIncorrect('go')).toBe(false);
		expect(isCityNameIncorrect('london')).toBe(false);
      });
  });
  
    describe('Check server answer', function () {
      it('should be incorrect if server answer data is empty', function () {
        expect(isServerAnswerIncorrect('')).toBe(true);
      });
	  it('should be incorrect if server answer data has cod = 404 ', function () {
        expect(isServerAnswerIncorrect({cod: '404'})).toBe(true);
      });
  });
})();
