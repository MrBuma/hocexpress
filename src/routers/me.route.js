const express = require('express');
const router = express.Router();
const meController = require('../app/controllers/MeController');


router.get('/me/stored/courses', meController.store);


module.exports = router;
