const router = require('express').Router()

const { createRoom, getRoomsOfUser, joinRoom, codeSave, exitRoom } = require('../controllers/room')

// new room
router.post("/room", createRoom);

// join room
router.post("/joinRoom", joinRoom);

// get rooms of a user
router.get("/room/:email", getRoomsOfUser);

// post code to DB
router.post("/code", codeSave);

// exit from room
router.post('/exitRoom', exitRoom)

module.exports = router;