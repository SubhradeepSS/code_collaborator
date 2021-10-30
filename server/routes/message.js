const router = require('express').Router()

const { createMessage, getMessages } = require('../controllers/message')

// create
router.post("/messages", createMessage);

// get
router.get("/messages/:roomId", getMessages);


module.exports = router;