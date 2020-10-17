const { Transform } = require('stream');

class CaesarCipherStream extends Transform {
    constructor(action, shift) {
        super();
        this._action = action;
        this._shift = shift;
    }

    _transform(chunk, encoding, callback) {
        callback(null, this._encodeString(chunk.toString()));
    }

  _encodeString(str) {
    let shift = this._shift;
    if (this._action === 'decode') {
        shift = 26 - shift;
    }

    let output = '';

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (char.match(/[a-z]/i)) {
            const code = str.charCodeAt(i);
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
            } else {
                char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }
        }

        output += char;
    }

    return output;
  }
}

module.exports = CaesarCipherStream;
