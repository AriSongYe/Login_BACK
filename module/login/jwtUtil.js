require('dotenv').config();
const jwt = require('jsonwebtoken');
const accessKey = process.env.ACCESS_SECRET_KEY;
const refreshKey = process.env.REFRESH_SECRET_KEY;

function generateAccessToken (id) {
    const payload = {
        id: id,
        permission: ['write'],
    }
    return jwt.sign(payload, accessKey, {
        algorithm: 'HS256',
        expiresIn: '1m',
    });
}

function generateRefreshToken (id) {
    const payload = {
        id: id, 
    }
    return jwt.sign(payload, refreshKey, {
        algorithm: 'HS256',
        expiresIn: '14d',
    });
}

function verifyAccessToken (receivedToken) {
    try {
        const decoded = jwt.verify(receivedToken, accessKey);
        // db query
        return {
            success: true,
            id: decoded.id, 
        }
    } catch(err) {
        console.log(err);
        return {
            success: false,
            id: null,
        }
    }
}

function verifyRefreshToken (receivedToken) {
    try {
        const decoded = jwt.verify(receivedToken, refreshKey);
        // db query
        return {
            success: true,
            id: decoded.id,
        }
    } catch(err) {
        console.log(err);
        return {
            success: false,
            id: null,
        }
    }
}


module.exports = {
    generateAccessToken,
    generateRefreshToken,
    verifyAccessToken,
    verifyRefreshToken,
}