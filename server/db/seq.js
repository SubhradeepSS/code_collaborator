//CockroachDB
const Sequelize = require("sequelize-cockroachdb");

// For secure connection to CockroachDB
const fs = require("fs");

// Connect to CockroachDB through Sequelize
const sequelize = new Sequelize({
	dialect: "postgres",
	username: "code_collaborator",
	password: "c6yGH1ocrPBgruaY",
	host: "free-tier8.aws-ap-southeast-1.cockroachlabs.cloud",
	port: 26257,
	database: "yellow-vole-471.hack_orm",
	dialectOptions: {
		ssl: {
			//For secure connection:
			ca: fs
				.readFileSync(`${process.env.HOME}/.postgresql/root.crt`)
				.toString(),
		},
	},
	logging: false,
});

module.exports = { sequelize };
