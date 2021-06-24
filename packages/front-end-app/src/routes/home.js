const express = require('express');

const indexController = require('../controllers');
const homeController = require('../controllers/home');

const router = express.Router();

/* GET home page. */
router.get('/', indexController.getIndex);

router.get('/home', homeController.getHome);

module.exports = router;
