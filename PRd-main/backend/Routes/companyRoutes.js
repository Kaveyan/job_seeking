const express = require('express')
const router = express.Router();

const {registerCompany,loginCompany,companygetme} = require('../controller/companyController');

router.post('/',registerCompany);

router.post('/companylogin',loginCompany);
const {CompanyProtect} = require('../middleware/authMiddleware');

router.get('/getcompany',CompanyProtect,companygetme)

module.exports = router;