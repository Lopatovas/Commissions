/* eslint-disable no-undef */
// eslint-disable-next-line import/no-extraneous-dependencies
const chai = require('chai');
const utils = require('../../dist/Logic/utils');


describe('Retrieve user function tests', () => {
  describe('Retrieve user test with no params', () => {
    it('Should return new user', () => {
      const resp = utils.retrieveUser();
      chai.expect(resp).to.be.an('object');
      chai.expect(resp).to.have.property('userId', 0);
      chai.expect(resp).to.have.property('weekHistory').which.has.lengthOf(0);
    });
  });

  describe('Retrieve user test id param: 5', () => {
    it('Should return new user with id 5', () => {
      const resp = utils.retrieveUser([], 5);
      chai.expect(resp).to.be.an('object');
      chai.expect(resp).to.have.property('userId', 5);
      chai.expect(resp).to.have.property('weekHistory').which.has.lengthOf(0);
    });
  });

  describe('Retrieve user which is already existing', () => {
    it('Should return exiting user', () => {
      const array = [];
      array[3] = { userId: 3, weekHistory: ['week'] };
      const resp = utils.retrieveUser(array, 3);
      chai.expect(resp).to.be.an('object');
      chai.expect(resp).to.have.property('userId', 3);
      chai.expect(resp).to.have.property('weekHistory').which.has.lengthOf(1);
    });
  });
});
