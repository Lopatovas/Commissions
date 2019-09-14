import { cashInCommision, cashOutCommision } from './Logic/calculator';

console.log(cashInCommision({ amount: 76, currency: 'EUR' }));

console.log(cashOutCommision({
  date: '2016-01-06', user_id: 2, user_type: 'juridical', type: 'cash_out', operation: { amount: 300.00, currency: 'EUR' },
}));
