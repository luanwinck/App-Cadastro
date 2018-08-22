const express = require('express');
const router = express.Router();
const controller = require('../controller/personController')
router.get('/:user', controller.get);

module.exports = router;