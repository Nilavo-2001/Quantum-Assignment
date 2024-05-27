const express = require('express');
const router = express.Router();
const allUserInfo = require('../controllers/userInfoController');
const userAuth = require('../middlewares/userAuth');

router.use('/auth', require('./auth'));
router.post('/info', userAuth, allUserInfo);
module.exports = router;
