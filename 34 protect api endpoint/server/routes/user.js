const express = require('express');
const router = express.Router();

// import controller
const { requireSignin } = require('../controllers/auth');
const { read } = require('../controllers/user');

router.get('/user/:id', requireSignin, read);

module.exports = router;
