require('dotenv').config()

const validApiKey = process.env.API_KEY

const authenticatApiKey = (req, res, next) => {
    const apiKey = req.headers['x-api-key']

    if (!apiKey) return res.status(401).send({ message: 'No API key provided' })
    if (apiKey != validApiKey) return res.status(403).send({ message: 'Invalid API key'})
    next()
}

module.exports = authenticatApiKey