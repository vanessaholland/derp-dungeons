const path = require('path');
const express = require('express');

const rootDir = require('../utils/path');

const router = express.Router();

const adminData = require('./admin');

router.use((req, res, next) => {
    console.log('In the middleware!');
    next();
});

router.get('/', (req, res, next) => {
    console.log(adminData.cards);
    res.sendFile(path.join(rootDir, 'views', 'inventory.html'));
});

module.exports = router;
