const { Message } = require("../models/message");

const createMessage = async (req, res) => {
	const newMessage = new Message(req.body);

	try {
		const savedMessage = await newMessage.save();
		res.status(201).json(savedMessage);
	} catch (e) {
		res.status(500).json(e);
	}
};

const getMessages = async (req, res) => {
	try {
		const messages = await Message.findAll({
			where: { roomId: req.params.roomId },
		});

		res.status(200).json(messages);
	} catch (e) {
		res.status(500).json(e);
	}
};

module.exports = { createMessage, getMessages };
