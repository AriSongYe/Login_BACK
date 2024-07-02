const connection = require('../../loaders/connectDB')
const express = require('express');
const { generateAccessToken, generateRefreshToken } = require('../../module/login/jwtUtil');
const router = express.Router();
router.use(express.json());

router.post('/', (req, res) => {
    const { username , password } = req.body;

    connection.query(
        'SELECT * FROM users WHERE username = ? AND password = ?',
        [username, password],
        (error, results, fields) => {
            if (error) {
                console.error('Error executing MySQL query:', error);
                res.sendStatus(500);
                return;
            }
            if (results.length > 0) {
                const accessToken = generateAccessToken(username);
                const refreshToken = generateRefreshToken(username);
        
                res.cookie('refreshToken', refreshToken, {
                    secure: false,
                    httpOnly: true,
                    sameSite: 'Strict',
                    maxAge: 14 * 24 * 60 * 60 * 1000,
                });
                res.json({ accessToken });        
            } else {
                res.send(false);
            }
        }
    );
});

module.exports = router;