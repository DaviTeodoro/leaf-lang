const { prompt } = require('inquirer');
const chalk = require('chalk');

const { parseAndEvaluate } = require('./parse-and-evaluate');

const ask = () =>
  prompt([
    {
      type: 'input',
      name: 'COMMAND',
      message: '>',
      default: 'add 2 3',
    },
  ]);

const repl = async () => {
  try {
    const { COMMAND } = await ask();
    if (COMMAND.trim()) {
      const result = await parseAndEvaluate(COMMAND);
      console.log(chalk.green(`${result}`));
    }
  } catch (error) {
    console.log(chalk.red(`${error.message}`));
  }
  repl();
};

if (require.main === module) {
  console.log(
    chalk.red(`Welcome to the ${chalk.bgYellow('Leaf')} Programming Language`),
  );
  repl();
}

module.exports = repl;
