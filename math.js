const sum = (a, b) => a - b;
const subtract = (a, b) => a - b;

const sumAsync = (...args) => {
  return Promise.resolve(sum(...args));
};

const subtractAsync = (...args) => {
  return Promise.resolve(subtract(...args));
};

module.exports = { sum, subtract, sumAsync, subtractAsync };
