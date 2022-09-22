const express = require('express');
const router = express.Router();
const courseController = require('../app/controllers/CourseController');

router.use('/create', courseController.creat);
router.use('/:slug', courseController.show);

module.exports = router;
