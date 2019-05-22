const data = require('../../dummy_data/users.json');

const reg = /\S+@\S+\.\S+/;
const emailArr = data.map(item => item.email);
const paswdArr = data.map(item => item.password);

const required = value => (value ? undefined : 'Required');
const minLength = value => (value.length > 6 ? undefined : 'Must be 6 characters or more');
const minFourLength = value => (value.length > 4 ? undefined : 'Must be 4 characters or more');
const minThreeLength = value => (value.length > 3 ? undefined : 'Must be 3 characters or more');
const maxLength = value => (value.length < 50 ? undefined : 'Must be 50 characters or less ');
const matchesPassword = (value, allValues) => (value === allValues.password ? undefined : 'Passwords must match');
const includeEmail = value => (emailArr.includes(value) ? undefined : 'Error');
const includePassword = value => (paswdArr.includes(+value) ? undefined : 'Error');
const validateEmail = value => (emailArr.includes(value) ? 'Error, include email' : undefined);
const normalEmail = value => (reg.test(value) ? undefined : 'Error, validate');

export {
  required,
  minLength,
  includeEmail,
  includePassword,
  matchesPassword,
  validateEmail,
  normalEmail,
  minFourLength,
  maxLength,
  minThreeLength
};
