const express = require('express');
const router = express.Router();

// import controller
const { signup } = require('../controllers/auth');

// import validators
const { userSignupValidator } = require('../validators/auth');
const { runValidation } = require('../validators');

router.post('/signup', userSignupValidator, runValidation, signup);

module.exports = router;
