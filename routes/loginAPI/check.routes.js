const connection = require('../../loaders/connectDB');
const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    const { username } = req.query;
    
    const sql = 'SELECT COUNT(*) AS count FROM users WHERE username = ?';
    connection.query(sql, [username], (err, result) => {
        if (err) {
            Logger.error(err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        const isAvailable = result[0].count === 0;
        res.send(isAvailable);
    });
});

module.exports = router;