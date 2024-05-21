const { Router } = require('express');
const authController = require('../controllers/authController');

const router = Router();

router.post('/signup', authController.signup); // add user to db 
// router.post('/login', authController.login); // authenticate user
// router.post('/logout', authController.login); // logout

module.exports = router;