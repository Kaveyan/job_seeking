const express = require('express');
const router = express.Router();
const {UserProfilesDetails,updateProfile,ProfileDetails} = require('../controller/UserProfileController');


router.post('/',UserProfilesDetails);
router.get('/:id',ProfileDetails)

router.put('/:id',updateProfile);


module.exports = router;    

