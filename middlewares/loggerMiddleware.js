const loggerMiddleware = (req, res, next) => {
    const reqMethod = req.method
    const host = req.host
    const reqUrl = req.originalUrl
    const time = new Date().toString()

    console.log(`Request Method: ${reqMethod}\t Request URL: ${host}/${reqUrl} \t TimeStamp: ${time}`)  
    next() 
}

module.exports = loggerMiddleware