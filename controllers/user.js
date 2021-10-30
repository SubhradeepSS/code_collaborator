const { User } = require('../models/user')

const userSignUp =  (req, res) => {
    User.sync({force:false}).then(() => {
        const email = req.body.email
        const name = req.body.name

        User.bulkCreate([
            {
                email,
                name
            }
        ]).then(() => {
            res.status(200).json({ msg: 'User created in CockroachDB' })
        })
    })
}

module.exports = { userSignUp }