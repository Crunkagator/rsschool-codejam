module.exports = function make(...arr) {
  const argArray = [];
  const closure = (...args) => {
    if (typeof args[0] === 'function') {
      return argArray.length > 0 ? argArray.reduce(args[0]) : Error('No args were passed for the reducer');
    }
    argArray.push(...args);
    return closure;
  };
  return closure(...arr);
};
