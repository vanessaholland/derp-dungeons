const path = require('path');
const express = require('express');

const rootDir = require('../utils/path');

const router = express.Router();

router.get('/add-card', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-card.html'));
});

router.post('/add-card', (req, res, next) => {
    console.log(req.body);
    res.redirect('/admin/add-card');
});

module.exports = router;
