const express = require('express');

const router = express.Router();

router.use((req, res, next) => {
    console.log('In the middleware!');
    next();
});

router.get('/', (req, res, next) => {
    res.send('<h1>Derp Dungeons</h1>');
});

module.exports = router;
