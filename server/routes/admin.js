const path = require('path');
const express = require('express');

const rootDir = require('../utils/path');

const router = express.Router();

const cards = [];

router.get('/add-card', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-card.html'));
});

router.post('/add-card', (req, res, next) => {
    cards.push({ title: req.body.title });
    res.redirect('/admin/add-card');
});

exports.routes = router;
exports.cards = cards;
