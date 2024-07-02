const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    res.clearCookie("refreshToken", {
        secure: false,
        httpOnly: true,
        sameSite: 'Strict',
    });
    console.log('clear cookie');
    res.send('Logged out successfully');
});

module.exports = router;