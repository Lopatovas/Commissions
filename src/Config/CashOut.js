import CUSTOMER_TYPE from '../Constants/CustomerType';

const cashOut = {};

cashOut[CUSTOMER_TYPE.NATURAL] = {
  PERCENTAGE: 0.3,
  WEEK_LIMIT: 1000,
};

cashOut[CUSTOMER_TYPE.LEGAL] = {
  PERCENTAGE: 0.3,
  MIN_COMMISSION: 0.5,
};

export default cashOut;
