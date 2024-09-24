const express = require('express');
const router = express.Router();

const {ApplyJobList} = require('../controller/ApplyJobController');


router.post('/',ApplyJobList);

module.exports = router;
