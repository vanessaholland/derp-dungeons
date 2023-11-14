const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const rootDir = require('./utils/path');

const app = express();

const adminRoutes = require('./routes/admin');
const inventoryRoutes = require('./routes/inventory');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(inventoryRoutes);

app.use((req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', '404.html'));
});

app.listen(3000);
