const fs = require('fs');
const util = require('util');
const chalk = require('chalk');

const logLn = s => console.log(`\n${s}\n`);

const logError = s => logLn('Error: ' + chalk.red(s));

const logSuccess = s => logLn(chalk.green(s));

exports.logLn = logLn;
exports.logError = logError;
exports.logSuccess = logSuccess;

const asyncWriteFile = util.promisify(fs.writeFile);
const asyncCreateDir = util.promisify(fs.mkdir);

exports.asyncWriteFile = asyncWriteFile;
exports.asyncCreateDir = asyncCreateDir;
