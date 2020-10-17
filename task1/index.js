const { pipeline } = require('stream');
const chalk = require('chalk');
const command = require('./argsParser');
const CaesarCipherStream = require('./caesarCipherStream');

const input = command.input ? command.input : process.stdin;
const output = command.output ? command.output : process.stdout;
const caesarCipher = new CaesarCipherStream(command.act, command.shift);

input.on('end', () => output.write('\n'));

pipeline(input, caesarCipher, output, (err) => {
    if (err) {
        console.error(chalk.red('Pipeline failed.', err));
        process.exit(-1);
    }
});
