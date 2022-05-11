const {
  isLetter,
  isWhitespace,
  isNumber,
  isParenthesis,
  isQuote,
} = require('./identify');

const tokenize = (input) => {
  const tokens = [];
  let cursor = 0;

  while (cursor < input.length) {
    const char = input[cursor];

    if (isParenthesis(char)) {
      tokens.push({ type: 'Parenthesis', value: char });
      cursor++;
      continue;
    }

    if (isWhitespace(char)) {
      cursor++;
      continue;
    }

    if (isNumber(char)) {
      const number = [];
      while (isNumber(input[cursor])) {
        number.push(input[cursor]);
        cursor++;
      }
      tokens.push({ type: 'Number', value: parseInt(number.join('')) });
      continue;
    }

    if (isLetter(char)) {
      const name = [];
      while (isLetter(input[cursor])) {
        name.push(input[cursor]);
        cursor++;
      }
      tokens.push({ type: 'Name', value: name.join('') });
      continue;
    }

    if (isQuote(char)) {
      const quote = [];
      while (!isQuote(input[++cursor])) {
        quote.push(input[cursor]);
      }
      tokens.push({ type: 'String', value: quote.join('') });
      cursor++;
      continue;
    }

    throw new Error(`Unexpected character: ${char}`);
  }

  return tokens;
};

module.exports = { tokenize };
