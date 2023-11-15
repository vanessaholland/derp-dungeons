const path = require('path');

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');

const rootDir = require('../utils/path');

const app = express();

const adminData = require('../routes/admin');
const inventoryRoutes = require('../routes/inventory');

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, 'public')));

app.use('/admin', adminData.routes);
app.use(inventoryRoutes);

app.use((req, res) => {
    res.sendFile(path.join(rootDir, 'views', '404.html'));
});

app.listen(3000);
