const express = require('express');
const { register, login, profile } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

//route for user registration
router.post('/register', register);

//route for user login
router.post('/login', login);

//route for user profile
router.get('/profile', authMiddleware, profile);

module.exports = router;