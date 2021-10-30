const { sequelize } = require('../db/seq')
const Sequelize = require('sequelize-cockroachdb')

const User = sequelize.define("user", {
    email: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    }
})

module.exports = { User }