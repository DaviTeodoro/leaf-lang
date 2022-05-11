const { prompt } = require('inquirer');
const chalk = require('chalk');

const { parseAndEvaluate } = require('./parse-and-evaluate');

const ask = () =>
  prompt([
    {
      type: 'input',
      name: 'COMMAND',
      message: '>',
    },
  ]);

const repl = async () => {
  try {
    const { COMMAND } = await ask();

    if (COMMAND.trim() === 'help') {
      console.log(
        `OK, here is some information to help you get started:
        Type ${chalk.green('(add 2 3)')} to get the result of 2 + 3.
        Type ${chalk.green('(def x 3)')} to define a variable x.
        Type ${chalk.green('(x)')} to get the value of x.
        Or visit ${chalk.green('Docs')} at `,
      );
    } else if (COMMAND.trim()) {
      const result = await parseAndEvaluate(COMMAND);
      console.log(chalk.green(`${result}`));
    }
  } catch (error) {
    console.error(chalk.red(`${error.message}`));
  }
  repl();
};

if (require.main === module) {
  console.log(
    `Welcome to 🍃 ${chalk.bgGreenBright(chalk.black.bold('Leaf Lang!'))} 🍃
    Type ${chalk.green('(add 2 3)')} to get the result of 2 + 3.
    Type ${chalk.green('(def x 3)')} to define a variable x.
    Type ${chalk.green('(x)')} to get the value of x.
    For more information, type ${chalk.green('(help)')}.
    Or visit ${chalk.green('Docs')} at `,
  );
  repl();
}

module.exports = repl;
