const express = require('express');
const expressLayouts = require('express-ejs-layouts');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(expressLayouts);

app.set('layouts', './layouts/main');
app.set('view engine', 'ejs');
const routes = require('./server/routes/recipeRoutes.js');
app.use('/', routes);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
