//CockroachDB
const Sequelize = require("sequelize-cockroachdb");
 
// For secure connection to CockroachDB
const fs = require('fs');

const { username, password, host, port, database, cert_path } = require('../config')

// Connect to CockroachDB through Sequelize
const sequelize = new Sequelize({
    dialect: "postgres",
    username,
    password,
    host,
    port,
    database,
    dialectOptions: {
      ssl: {
        //For secure connection:
        ca: fs.readFileSync(cert_path)
               .toString()
      },
    },
    logging: false, 
});

module.exports = { sequelize }