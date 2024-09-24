const express = require('express');
const router = express.Router();


const {companyApply} = require('../controller/CompanyApplyController');

router.get('/:id',companyApply);

module.exports = router;