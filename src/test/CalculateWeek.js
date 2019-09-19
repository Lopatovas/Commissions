/* eslint-disable no-undef */
// eslint-disable-next-line import/no-extraneous-dependencies
const chai = require('chai');
const utils = require('../../dist/Logic/utils');


describe('Calculate week function tests', () => {
  describe('Calculate week test with no params', () => {
    it('Should return -1', () => {
      const resp = utils.calculateWeek();
      chai.expect(resp).to.equal(-1);
    });
  });

  describe('Calculate week test with date: 2019-01-05', () => {
    it('Should return 1', () => {
      const resp = utils.calculateWeek('2019-01-05');
      chai.expect(resp).to.equal(1);
    });
  });

  describe('Calculate week test with date: 2019-01-07', () => {
    it('Should return 2', () => {
      const resp = utils.calculateWeek('2019-01-07');
      chai.expect(resp).to.equal(2);
    });
  });
});
