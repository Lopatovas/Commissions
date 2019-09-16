import { cashInCommision, cashOutCommision } from './Logic/calculator';

const users = [];

const data = [
  {
    date: '2016-01-05', user_id: 1, user_type: 'natural', type: 'cash_in', operation: { amount: 200.00, currency: 'EUR' },
  },
  {
    date: '2016-01-06', user_id: 2, user_type: 'juridical', type: 'cash_out', operation: { amount: 300.00, currency: 'EUR' },
  },
  {
    date: '2016-01-06', user_id: 1, user_type: 'natural', type: 'cash_out', operation: { amount: 30000, currency: 'EUR' },
  },
  {
    date: '2016-01-07', user_id: 1, user_type: 'natural', type: 'cash_out', operation: { amount: 1000.00, currency: 'EUR' },
  },
  {
    date: '2016-01-07', user_id: 1, user_type: 'natural', type: 'cash_out', operation: { amount: 100.00, currency: 'EUR' },
  },
  {
    date: '2016-01-10', user_id: 1, user_type: 'natural', type: 'cash_out', operation: { amount: 100.00, currency: 'EUR' },
  },
  {
    date: '2016-01-10', user_id: 2, user_type: 'juridical', type: 'cash_in', operation: { amount: 1000000.00, currency: 'EUR' },
  },
  {
    date: '2016-01-10', user_id: 3, user_type: 'natural', type: 'cash_out', operation: { amount: 1000.00, currency: 'EUR' },
  },
  {
    date: '2016-02-15', user_id: 1, user_type: 'natural', type: 'cash_out', operation: { amount: 300.00, currency: 'EUR' },
  },
];

for (let i = 0; i < data.length; i += 1) {
  switch (data[i].type) {
    case 'cash_in':
      console.log(cashInCommision(data[i].operation));
      break;
    default:
      console.log(cashOutCommision(data[i], users));
      break;
  }
}
