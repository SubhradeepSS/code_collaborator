const router = require('express').Router()

const { userSignUp } = require('../controllers/user')

// save user data from auth0 to cockroachDB
router.post("/userSignUp", userSignUp);

module.exports = router;