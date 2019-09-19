import { cashInCommision, cashOutCommision } from './Logic/calculator';
import OPERATION_TYPE from './Constants/OperationType';

const fs = require('fs');

const args = process.argv.slice(2);

const fileContents = fs.readFileSync(args[0], 'utf8');

try {
  const data = JSON.parse(fileContents);
  const users = [];
  for (let i = 0; i < data.length; i += 1) {
    switch (data[i].type) {
      case OPERATION_TYPE.CASH_IN:
        console.log(cashInCommision(data[i].operation));
        break;
      case OPERATION_TYPE.CASH_OUT:
        console.log(cashOutCommision(data[i], users));
        break;
      default:
        console.log(`${data[i].type} is not a valid operation`);
        break;
    }
  }
} catch (err) {
  console.error(err);
}
