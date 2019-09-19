/* eslint-disable no-undef */
// eslint-disable-next-line import/no-extraneous-dependencies
const chai = require('chai');
const cashOut = require('../../dist/Logic/calculator');


describe('Cash in commision function tests', () => {
  describe('Cash in commision with 300.00 EUR amount', () => {
    it('Should return 0.90', () => {
      const data = {
        date: '2016-01-06', user_id: 2, user_type: 'juridical', type: 'cash_in', operation: { amount: 300.00, currency: 'EUR' },
      };
      const resp = cashOut.cashInCommision(data.operation);
      chai.expect(resp).to.equal('0.09');
    });
  });

  describe('Cash in commision test with unsupported currency', () => {
    it('Should return USD currency is currently not supported', () => {
      const data = {
        date: '2016-01-06', user_id: 2, user_type: 'juridical', type: 'cash_in', operation: { amount: 300.00, currency: 'USD' },
      };
      const resp = cashOut.cashInCommision(data.operation);
      chai.expect(resp).to.equal('USD is currently not supported');
    });
  });

  describe('Cash in commision test where commisions exceed 5.00', () => {
    it('Should return 0.50', () => {
      const data = {
        date: '2016-01-06', user_id: 2, user_type: 'juridical', type: 'cash_in', operation: { amount: 200000.00, currency: 'EUR' },
      };
      const resp = cashOut.cashInCommision(data.operation);
      chai.expect(resp).to.equal('5.00');
    });
  });
});
