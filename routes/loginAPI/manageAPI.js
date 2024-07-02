const express = require('express');
const router = express.Router();
const loginRoutes = require('./login.routes');
const logoutRoutes = require('./logout.routes');
const identifierRoutes = require('./identifier.routes');
const signupRoutes = require('./signUp.routes');
const checkUserRoutes = require('./check.routes');
const cookieParser = require('cookie-parser');

router.use(cookieParser());

router.get('/', (req, res) => {
    res.send('This is login API');
});

router.use('/login', loginRoutes);
router.use('/logout', logoutRoutes);
router.use('/identifier', identifierRoutes);  
router.use('/signup', signupRoutes);
router.use('/check', checkUserRoutes);

module.exports = router;