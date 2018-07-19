const express = require('express')
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('hello', {
        message: res.__('hello', 'World')
    })
})

module.exports = router;