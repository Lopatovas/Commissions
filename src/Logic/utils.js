import moment from 'moment';
import Customer from '../DataStructures/Customer';

// Exponential notation for number formatting.
const formatValue = (value, decimalPlaces) => Number(`${Math.ceil(`${value}e${decimalPlaces}`)}e-${decimalPlaces}`).toFixed(decimalPlaces);

const calculateWeek = (date) => {
  const input = moment(date);
  return input.isoWeek();
};

const retrieveUser = (users, userId) => {
  if (users[userId] !== null && users[userId] !== undefined) {
    return users[userId];
  }
  const result = users;
  result[userId] = new Customer(userId);
  return result[userId];
};

export { formatValue, calculateWeek, retrieveUser };
