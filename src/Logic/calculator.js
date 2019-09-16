/* eslint-disable camelcase */
import CURRENCY from '../Config/Currency';
import CASH_IN from '../Config/CashIn';
import CASH_OUT from '../Config/CashOut';
import CUSTOMER_TYPE from '../Constants/CustomerType';

import { formatValue, calculateWeek, retrieveUser } from './utils';

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

const cashOutNatural = (data, users) => {
  const { operation, user_id, date } = data;
  const user = retrieveUser(users, user_id);
  const week = calculateWeek(date);
  if (operation.currency === CURRENCY.EUR.CODE) {
    if (user.isMaxLimitDone(week)) {
      const result = operation.amount * (CASH_OUT[CUSTOMER_TYPE.NATURAL].PERCENTAGE / PERCENTAGE_CONVERTER);
      return formatValue(result, CURRENCY.EUR.SMALLEST_CURRENCY_DECIMAL);
    }
    const taxableAmount = operation.amount - (CASH_OUT[CUSTOMER_TYPE.NATURAL].WEEK_LIMIT - user.getWeekHistory(week));
    user.addWeekHistory(week, operation.amount);
    if (taxableAmount > 0) {
      const result = taxableAmount * (CASH_OUT[CUSTOMER_TYPE.NATURAL].PERCENTAGE / PERCENTAGE_CONVERTER);
      return formatValue(result, CURRENCY.EUR.SMALLEST_CURRENCY_DECIMAL);
    }
    const result = 0;
    return result.toFixed(CURRENCY.EUR.SMALLEST_CURRENCY_DECIMAL);
  }
  return `${operation.currency} currency is currently not supported`;
};

const cashOutCommision = (data, users = []) => {
  const { user_type, operation } = data;
  switch (user_type) {
    case CUSTOMER_TYPE.LEGAL:
      return cashOutLegal(operation);
    case CUSTOMER_TYPE.NATURAL:
      return cashOutNatural(data, users);
    default:
      return `${user_type} is not a valid user`;
  }
};

export { cashInCommision, cashOutCommision };
