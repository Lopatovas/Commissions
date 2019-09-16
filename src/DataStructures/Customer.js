import CASH_OUT from '../Config/CashOut';
import CUSTOMER_TYPE from '../Constants/CustomerType';

export default class Customer {
  constructor(userId) {
    this.userId = userId;
    this.weekHistory = [];
  }

  addWeekHistory(week, amount) {
    if (this.weekHistory[week]) {
      this.weekHistory[week].amount += amount;
    } else {
      this.weekHistory[week] = { week, amount };
    }
  }

  getWeekHistory(week) {
    if (this.weekHistory[week]) {
      return this.weekHistory[week].amount;
    }
    return 0;
  }

  isMaxLimitDone(week) {
    if (this.weekHistory[week]) {
      const result = this.weekHistory[week].amount >= CASH_OUT[CUSTOMER_TYPE.NATURAL].WEEK_LIMIT;
      return result;
    }
    return false;
  }
}
