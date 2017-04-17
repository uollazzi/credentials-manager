const chalk = require('chalk');

exports.success = (msg) => {
  console.log(chalk.green(msg));
}

exports.warning = (msg) => {
  console.warn(chalk.yellow(msg));
}

exports.info = (msg) => {
  console.info(chalk.cyan(msg));
}

exports.error = (msg) => {
  console.error(chalk.red(msg));
}