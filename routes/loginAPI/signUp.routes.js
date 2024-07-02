const connection = require('../../loaders/connectDB')
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.post('/', (req, res) => {
    console.log(req.body);
    const { username, password } = req.body;
    const sql = 'INSERT INTO users (username, password) VALUES (?, ?)'
    connection.query(sql, [username, password],
        (error, results, fields) => {
            if (error) {
                console.error('Error inserting user:', error);
                res.sendStatus(500);
                return;
            }
        }
    );
    res.sendStatus(201);

});

module.exports = router;