import moment from 'moment';
import Customer from '../DataStructures/Customer';

// Exponential notation for number formatting.
const formatValue = (value, decimalPlaces = 2) => {
  if (!value) {
    return 0;
  }
  return Number(`${Math.ceil(`${value}e${decimalPlaces}`)}e-${decimalPlaces}`).toFixed(decimalPlaces);
};

const calculateWeek = (date) => {
  if (!date) {
    return -1;
  }
  const input = moment(date);
  return input.isoWeek();
};

const retrieveUser = (users = [], userId = 0) => {
  if (users[userId] !== null && users[userId] !== undefined) {
    return users[userId];
  }
  const result = users;
  result[userId] = new Customer(userId);
  return result[userId];
};

export { formatValue, calculateWeek, retrieveUser };
