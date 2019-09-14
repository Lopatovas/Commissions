/* eslint-disable camelcase */
import CURRENCY from '../Config/Currency';
import CASH_IN from '../Config/CashIn';
import CASH_OUT from '../Config/CashOut';
import CUSTOMER_TYPE from '../Constants/CustomerType';

import { formatValue } from './utils';

const PERCENTAGE_CONVERTER = 100;

const cashInCommision = (operation) => {
  const { amount, currency } = operation;
  if (currency === CURRENCY.EUR.CODE) {
    const result = amount * (CASH_IN.PERCENTAGE / PERCENTAGE_CONVERTER);
    if (result > CASH_IN.MAX_COMMISION_AMOUNT) {
      return CASH_IN.MAX_COMMISION_AMOUNT.toFixed(CURRENCY.EUR.SMALLEST_CURRENCY_DECIMAL);
    }
    return formatValue(result, CURRENCY.EUR.SMALLEST_CURRENCY_DECIMAL);
  }
  return `${currency} is currently not supported`;
};

const cashOutLegal = (operation) => {
  const { amount, currency } = operation;
  if (currency === CURRENCY.EUR.CODE) {
    const result = amount * (CASH_OUT[CUSTOMER_TYPE.LEGAL].PERCENTAGE / PERCENTAGE_CONVERTER);
    if (result < CASH_OUT[CUSTOMER_TYPE.LEGAL].MIN_COMMISSION) {
      return CASH_OUT[CUSTOMER_TYPE.LEGAL].MIN_COMMISSION.toFixed(CURRENCY.EUR.SMALLEST_CURRENCY_DECIMAL);
    }
    return formatValue(result, CURRENCY.EUR.SMALLEST_CURRENCY_DECIMAL);
  }
  return `${currency} currency is currently not supported`;
};

const cashOutNatural = (data) => {
  console.log('natural');
};

const cashOutCommision = (data) => {
  const { user_type, operation } = data;
  switch (user_type) {
    case CUSTOMER_TYPE.LEGAL:
      return cashOutLegal(operation);
    case CUSTOMER_TYPE.NATURAL:
      return cashOutNatural(data);
    default:
      return `${user_type} is not a valid user`;
  }
};

export { cashInCommision, cashOutCommision };
