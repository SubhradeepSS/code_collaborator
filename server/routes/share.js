const router = require('express').Router()

const { shareWhatsApp } = require('../controllers/share')

// create
router.post("/shareCode", shareWhatsApp);


module.exports = router;