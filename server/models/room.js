const { sequelize } = require("../db/seq");
const Sequelize = require("sequelize-cockroachdb");

const Room = sequelize.define("room", {
	roomId: {
		type: Sequelize.STRING,
		primaryKey: true,
	},
	roomName: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	code: {
		type: Sequelize.STRING,
		defaultValue: "",
	},
	members: {
		type: Sequelize.ARRAY(Sequelize.STRING),
		defaultValue: [],
	},
});

Room.sync();

module.exports = { Room };
