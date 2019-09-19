/* eslint-disable no-undef */
// eslint-disable-next-line import/no-extraneous-dependencies
const chai = require('chai');
const utils = require('../../dist/Logic/utils');


describe('Format value function tests', () => {
  describe('Format value test with no params', () => {
    it('Should return 0', () => {
      const resp = utils.formatValue();
      chai.expect(resp).to.equal(0);
    });
  });

  describe('Format value test with params: 3 decimal points, 0.0001', () => {
    it('Should return 0.001', () => {
      const resp = utils.formatValue(0.0001, 3);
      chai.expect(resp).to.equal('0.001');
    });
  });

  describe('Format value test with params: 1 decimal point, 0.1005', () => {
    it('Should return 0.2', () => {
      const resp = utils.formatValue(0.1005, 1);
      chai.expect(resp).to.equal('0.2');
    });
  });
});
