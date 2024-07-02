'use strict'

const express = require('express');
const path =require('path');
const cors = require('cors');
const Logger = require('./loaders/loggers');
const connection = require('./loaders/connectDB');
const PORT = 3000;


const manageAPI = require('./routes/loginAPI/manageAPI');


async function startServer() {
    const app = express();

    app.use(express.static(path.join(__dirname, '../yecsong/build')));

    app.use(cors({
      origin: "http://localhost:3000",
      credentials: true,
    }))

    app.use('/api', manageAPI);

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../yecsong/build', 'index.html'));
    });

    app.listen(PORT, () => {
      Logger.info(`
        ################################################
        🛡️  Server listening on port: ${PORT} 🛡️
        ################################################
      `);
    }).on('error', err => {
      Logger.error(err);
      process.exit(1);
    });
}

startServer();