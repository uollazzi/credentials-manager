const chalk = require('chalk');

exports.success = (...msg) => {
  console.log(chalk.bold.green(msg));
}

exports.warning = (...msg) => {
  console.warn(chalk.bold.yellow(msg));
}

exports.info = (...msg) => {
  console.info(chalk.bold.cyan(msg));
}

exports.error = (...msg) => {
  console.error(chalk.bold.red(msg));
}