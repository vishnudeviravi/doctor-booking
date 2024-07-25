const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');

const controller = require('../controllers/doctor-controllers');

router.post('/signup', upload.single('image'), controller.signupDoctor);
router.post('/login', controller.loginDoctor);

module.exports = router;
