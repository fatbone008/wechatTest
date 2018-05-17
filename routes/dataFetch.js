var express = require('express');
var router = express.Router();

router.get('/testingJson', (req, res, next) => {
    res.json({'ab': 'cd'});
})

module.exports = router;