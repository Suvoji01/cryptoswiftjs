// src/index.js
const cryptoModule = require('./crypto');
module.exports = {
    encrypt: cryptoModule.encrypt,
    decrypt: cryptoModule.decrypt
};