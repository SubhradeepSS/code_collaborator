const { accountSid, authToken  } = require('../config')

const shareWhatsApp = (req, res) => {
    const client = require('twilio')(accountSid, authToken);

    client.messages
            .create({
                from: 'whatsapp:+14155238886',
                body: req.body.code,
                to: `whatsapp:${req.body.phone}`
            })
            .then(() => {
                res.status(200).json("Sent to whatsapp")
            })
            .catch(err => {
                res.status(500).json(err)
            })
}

module.exports = { shareWhatsApp }