const { User } = require('../models/user')
const { Room } = require('../models/room')

const userSignUp = (req, res) => {
    const { email, name } = req.body

    User.bulkCreate([
        {
            email,
            name
        }
    ]).then(() => {
        res.status(201).json({ msg: 'User created in CockroachDB' })
    }).catch(() => {
        res.status(409).json({ msg: "User logging in through oauth - google" })
    })
}

module.exports = { userSignUp }