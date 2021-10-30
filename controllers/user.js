const { User } = require('../models/user')

const userSignUp =  (req, res) => {
    User.sync({ force:false }).then(() => {
        const email = req.body.email
        const name = req.body.name

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
    })
}

module.exports = { userSignUp }