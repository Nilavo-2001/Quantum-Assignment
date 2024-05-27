const express = require('express');
const router = express.Router();
const { signup, login, validateJwt } = require('../controllers/userAuthContoller');
const userAuth = require('../middlewares/userAuth');

router.post('/signup', signup);
router.post('/login', login);
router.get('/validate-jwt', userAuth, validateJwt);
module.exports = router;
