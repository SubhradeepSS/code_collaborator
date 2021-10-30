const router = require("express").Router();

const {
	createRoom,
	getRoomsOfUser,
	joinRoom,
	codeSave,
	exitRoom,
	sendCode,
} = require("../controllers/room");

// new room
router.post("/room", createRoom);

// join room
router.post("/joinRoom", joinRoom);

// get rooms of a user
router.get("/room/:email", getRoomsOfUser);

// post code to DB
router.post("/code", codeSave);

// get code
router.get("/code/:roomId", sendCode);

// exit from room
router.post("/exitRoom", exitRoom);

module.exports = router;
