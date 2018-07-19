const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    let code = 200
    let message = getMessage()
    if (message == null) {
        code = 404
        message = res.__('error')[code]
    }
    res.json({code: code, message: message})
})

function getMessage() {
    return null;
}

module.exports = router