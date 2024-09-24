const express = require('express');
const router = express.Router();

const { CompanyQuestionList,CreateQuestion } = require('../controller/CompanyQuestionController')


router.post('/',CreateQuestion);
router.get('/:id',CompanyQuestionList);

module.exports = router;
