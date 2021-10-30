const { sequelize } = require('../db/seq')
const Sequelize = require('sequelize-cockroachdb')

const Message = sequelize.define("message", {
    roomId: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senderId: {
        type: Sequelize.STRING
    },
    senderName: {
        type: Sequelize.STRING
    },
    text: {
        type: Sequelize.STRING,
        allowNull: false
    }
})


Message.sync()


module.exports = { Message }