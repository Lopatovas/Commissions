/* eslint-disable no-undef */
// eslint-disable-next-line import/no-extraneous-dependencies
const chai = require('chai');
const cashOut = require('../../dist/Logic/calculator');


describe('Cash out commision function tests', () => {
  describe('Cash out commision test with no params', () => {
    it('Should return No user provided', () => {
      const resp = cashOut.cashOutCommision();
      chai.expect(resp).to.equal('No user provided');
    });
  });

  describe('Cash out commision test with invalid user type', () => {
    it('Should return Non existant is not a valid user', () => {
      const data = { user_type: 'Non existant' };
      const resp = cashOut.cashOutCommision(data);
      chai.expect(resp).to.equal('Non existant is not a valid user');
    });
  });

  describe('Cash out for legal user', () => {
    describe('Cash out commision with 300.00 EUR amount', () => {
      it('Should return 0.90', () => {
        const data = {
          date: '2016-01-06', user_id: 2, user_type: 'juridical', type: 'cash_out', operation: { amount: 300.00, currency: 'EUR' },
        };
        const resp = cashOut.cashOutCommision(data);
        chai.expect(resp).to.equal('0.90');
      });
    });

    describe('Cash out commision test with unsupported currency', () => {
      it('Should return USD currency is currently not supported', () => {
        const data = {
          date: '2016-01-06', user_id: 2, user_type: 'juridical', type: 'cash_out', operation: { amount: 300.00, currency: 'USD' },
        };
        const resp = cashOut.cashOutCommision(data);
        chai.expect(resp).to.equal('USD currency is currently not supported');
      });
    });

    describe('Cash out commision test where commisions do not exceed 0.50', () => {
      it('Should return 0.50', () => {
        const data = {
          date: '2016-01-06', user_id: 2, user_type: 'juridical', type: 'cash_out', operation: { amount: 2.00, currency: 'EUR' },
        };
        const resp = cashOut.cashOutCommision(data);
        chai.expect(resp).to.equal('0.50');
      });
    });
  });
  describe('Cash out for natural user', () => {
    const userArray = [];
    describe('Cash out commision with 30000.00 EUR amount', () => {
      it('Should return 87.00', () => {
        const data = {
          date: '2016-01-06', user_id: 1, user_type: 'natural', type: 'cash_out', operation: { amount: 30000, currency: 'EUR' },
        };
        const resp = cashOut.cashOutCommision(data, userArray);
        chai.expect(resp).to.equal('87.00');
      });
    });

    describe('Cash out commision test with unsupported currency', () => {
      it('Should return LT currency is currently not supported', () => {
        const data = {
          date: '2016-01-06', user_id: 2, user_type: 'natural', type: 'cash_out', operation: { amount: 300.00, currency: 'LT' },
        };
        const resp = cashOut.cashOutCommision(data);
        chai.expect(resp).to.equal('LT currency is currently not supported');
      });
    });

    describe('Cash out commision when user has not reached limit for the week', () => {
      it('Should return 0.00', () => {
        const data = {
          date: '2016-01-10', user_id: 5, user_type: 'natural', type: 'cash_out', operation: { amount: 1000.00, currency: 'EUR' },
        };
        const resp = cashOut.cashOutCommision(data, userArray);
        chai.expect(resp).to.equal('0.00');
      });
    });

    describe('Cash out commision test when user has reached limit for the week', () => {
      it('Should return 0.00', () => {
        const data1 = {
          date: '2016-01-10', user_id: 3, user_type: 'natural', type: 'cash_out', operation: { amount: 600.00, currency: 'EUR' },
        };
        const data2 = {
          date: '2016-01-09', user_id: 3, user_type: 'natural', type: 'cash_out', operation: { amount: 600.00, currency: 'EUR' },
        };
        cashOut.cashOutCommision(data1, userArray);
        const resp = cashOut.cashOutCommision(data2, userArray);
        chai.expect(resp).to.equal('0.60');
      });
    });
  });
});
