const express = require('express');
const router = express.Router();
const recipeController = require('../controller/recipeController');

router.get('/', recipeController.homepage);


module.exports = router;
