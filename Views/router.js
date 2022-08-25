const express = require('express');
const router = express.Router();

const emp = require('../Controller/emp-controller');
router.route('/api/emp/create').post(emp.create);


module.exports = router;