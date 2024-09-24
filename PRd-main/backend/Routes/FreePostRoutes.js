const express = require('express');
const router = express.Router();

const {FreelancerPost, FreelancerPostList,FreeDeletePost} = require('../controller/FreeCreatePost');


router.post('/',FreelancerPost);
router.get('/',FreelancerPostList);
router.delete('/:id',FreeDeletePost);

module.exports = router;