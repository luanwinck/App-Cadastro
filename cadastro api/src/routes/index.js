const express = require('express');
const router = express.Router();
router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "Teste",
        text: "texto texto texto texto texto texto texto texto texto texto texto "
    });
});
module.exports = router;