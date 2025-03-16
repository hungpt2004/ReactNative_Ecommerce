const express = require('express')
const authRouter = express.Router();
const authController = require('../controllers/authen.controller')

authRouter.post('/login', authController.signInWithEmailAndPassword);
authRouter.post('/register', authController.createUser);
authRouter.get('/verify', authController.verifyEmail);

module.exports = authRouter