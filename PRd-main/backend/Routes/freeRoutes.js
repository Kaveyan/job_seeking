const express = require('express');
const router = express.Router();
const {registerFreelancer,loginFree} = require('../controller/freeController');

router.post('/',registerFreelancer);

router.post('/free',loginFree);

module.exports =router;


