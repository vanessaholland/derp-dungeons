const express = require('express');

const router = express.Router();

router.get('/add-card', (req, res, next) => {
    res.send('<form action="/admin/add-card" method="POST"><input type="text" name="title"><button type="submit">Add Card</button></form>');
});

router.post('/add-card', (req, res, next) => {
    console.log(req.body);
    res.redirect('/admin/add-card');
});

module.exports = router;
