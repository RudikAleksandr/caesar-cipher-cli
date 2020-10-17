const chalk = require('chalk');
const fs = require('fs');

const parseShift = (value) => {
    const numberShifts = parseInt(value, 10);
    if (isNaN(numberShifts) || !Number.isInteger(numberShifts)) {
        _errorHandling(`"${value}" is incorrect, for shift use some number`);
    }

    return numberShifts;
};

const parseInput = (path) => {
    path = path.trim();
    if (!fs.existsSync(path)) {
        _errorHandling(`${path} not find`);
    }

    return fs.createReadStream(path);
};

const parseOutput = (path) => {
    path = path.trim();
    if (!fs.existsSync(path)) {
        _errorHandling(`${path} not find`);
    }

    return fs.createWriteStream(path, { flags: 'a+' });
};

const parseAction = (action) => {
    if (action !== 'encode' && action !== 'decode') {
        _errorHandling(`action "${action}" is incorrect! use encode or decode`);
    }

    return action;
};

const _errorHandling = (message) => {
    console.error(chalk.red(message));
    process.exit(-1);
};

module.exports = {
    parseShift,
    parseInput,
    parseOutput,
    parseAction
};
