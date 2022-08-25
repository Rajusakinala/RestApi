const express = require('express');
const router = express.Router();

const emp = require('../Controller/emp-controller');
router.route('/api/emp/create').post(emp.create);
router.route('/api/emp/list').get(emp.list);


module.exports = router;