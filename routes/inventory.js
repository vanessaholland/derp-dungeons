const path = require('path');
const express = require('express');

const rootDir = require('../utils/path');

const router = express.Router();

router.use((req, res, next) => {
    console.log('In the middleware!');
    next();
});

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'inventory.html'));
});

module.exports = router;
