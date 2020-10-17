const { Command } = require('commander');
const parsers = require('./parsers');

const command = new Command();

command
  .option('-i, --input [file]', 'path input file', parsers.parseInput)
  .option('-o, --output [file]', 'path output file', parsers.parseOutput)
  .requiredOption('-s, --shift <number>', 'number of shifts', parsers.parseShift)
  .requiredOption('-a, --act <type>', 'an action encode/decode', parsers.parseAction);

command.parse(process.argv);

module.exports = command;
