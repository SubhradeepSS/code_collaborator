const { Room } = require("../models/room");
const { nanoid } = require("nanoid");
const { Op } = require("sequelize");
const { sequelize } = require("../db/seq");

const createRoom = async (req, res) => {
	const { email, roomName, password } = req.body;
	if (!email || !roomName || !password) {
		res.status(422).json({ error: "Please add all fields" });
		return;
	}

	const newRoom = new Room({
		roomId: nanoid(6),
		members: [email],
		roomName,
		password,
		code: "",
	});

	try {
		const savedRoom = await newRoom.save();
		res.status(201).json(savedRoom);
	} catch (err) {
		res.status(500).json(err);
	}
};

const getRoomsOfUser = async (req, res) => {
	const { email } = req.params;
	try {
		const rooms = await Room.findAll({
			where: {
				members: {
					[Op.contains]: [email],
				},
			},
		});

		res.status(200).json(rooms);
	} catch (e) {
		res.status(500).json(e);
	}
};

const joinRoom = async (req, res) => {
	const { email, roomId, password } = req.body;

	if (!email || !roomId || !password) {
		res.status(422).json({ error: "please add all field" });
	} else {
		Room.findByPk(roomId)
			.then(async (savedRoom) => {
				if (!savedRoom) {
					res.status(422).json({ error: "Invalid Room Id or password" });
				} else if (savedRoom?.password === password) {
					await Room.update(
						{
							members: sequelize.fn(
								"array_append",
								sequelize.col("members"),
								email
							),
						},
						{ where: { roomId: roomId } }
					);

					res.status(200).json({ msg: `joined room` });
				} else {
					res.status(422).json({ error: "Invalid room id or password" });
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}
};

const codeSave = async (req, res) => {
	let { roomId, code } = req.body;

	const room = await Room.findByPk(roomId);
	room.code = code;
	await room.save();
	res.status(200).json({ msg: "code saved", code });
};

const sendCode = async (req, res) => {
	let { roomId } = req.params;

	const room = await Room.findByPk(roomId);
	res.status(200).json({ code: room.code, msg: "getCode" });
};

const exitRoom = async (req, res) => {
	const { roomId, email } = req.body;

	const room = await Room.findByPk(roomId);

	room.members = room.members.filter((member) => member !== email);
	await room.save();

	res.status(200).json({ msg: "exit room" });
};

module.exports = {
	createRoom,
	getRoomsOfUser,
	joinRoom,
	codeSave,
	exitRoom,
	sendCode,
};
