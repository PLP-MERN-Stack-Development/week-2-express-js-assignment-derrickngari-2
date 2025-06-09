const errorHandler = (err, req, res, next) => {
    console.log(err)

    if(err.isOperational) res.status(err.statusCode).json({ error: err.message})
    res.status(500).json({ error: 'Internal server error' })
}

module.exports = { errorHandler }