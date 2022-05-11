const { environment } = require('./standard-library');
const last = (collection) => collection[collection.length - 1];

const isCallExpression = (node) => node.type === 'CallExpression';
const isIdentifier = (node) => node.type === 'Identifier';

const apply = (node) => {
  const fn = environment[node.name];
  const args = node.arguments.map(evaluate);
  if (!fn) throw new TypeError(`Unknown function ${node.name}`);
  return fn(...args);
};

const getIdentifier = (node) => {
  if (!environment[node.name])
    throw new ReferenceError(`Unknown identifier ${node.name}`);
  return environment[node.name];
};

const evaluate = (node) => {
  if (isCallExpression(node)) return apply(node);
  if (isIdentifier(node)) return getIdentifier(node);
  if (node.value) return node.value;
};

module.exports = { evaluate };
