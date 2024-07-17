const express = require('express');
const router = express.Router();
const controllers = require('../controllers/department-controller');
const upload = require('../middlewares/upload');

router.get('/', controllers.getDepartments);
router.post('/', upload.single('image'), controllers.postDepartment);

module.exports = router;
