const express = require('express');
const { generateAccessToken, verifyRefreshToken, verifyAccessToken } = require('../../module/login/jwtUtil');

const router = express.Router();

router.post('/', (req, res) => {
    const accessToken = req.headers.authorization;

    try {
        const parsedAccessToken = accessToken.split(' ')[1];
        verifyAccessToken(parsedAccessToken);
        res.send('Success') 
    } catch(err) {
        try {
            const verifiedToken = verifyRefreshToken(req.cookies.refreshToken);
            res.send(generateAccessToken(verifiedToken.id));
        } catch(err) {
            console.log("Invalid Refresh token! Please Log-in");
            res.status(401).json({ message: 'Invalid Refresh token!'+ error.message });;
        }
    }
})

module.exports = router;