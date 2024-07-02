const crypto = require('crypto');

function generateNewSecretKey() {
    return crypto.randomBytes(32).toString('hex');
}

module.exports = generateNewSecretKey;