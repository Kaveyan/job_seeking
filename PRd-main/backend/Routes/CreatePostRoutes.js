const express = require('express')
const router = express.Router();

const {CreatePostCompany,PostList,DeletePost,ListJob} = require('../controller/CreatePost');

router.post('/',CreatePostCompany);
router.get('/:id',PostList);
router.delete('/:id',DeletePost);
router.get('/',ListJob);


module.exports = router;
