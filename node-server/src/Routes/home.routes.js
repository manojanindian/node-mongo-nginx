const express = require('express');
const checkAuth = require('../Middleware/checkAuth.middleware');
const homeControllers = require('../Controllers/home.controllers');
const router = express.Router();

router.get('/', homeControllers.homePage);

module.exports = router