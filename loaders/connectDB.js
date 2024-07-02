require('dotenv').config();
const mysql = require('mysql2');


const dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.MYSQL_PASSWORD,
    database: 'userdatabase'
});

dbConnection.connect((err) => {
    if (err) {
        console.log('Error Connecting to MYSQL:', err);
        Logger.error(err);
        return;
    }
    console.log('Connected to MYSQL DB.');
})

module.exports = dbConnection;