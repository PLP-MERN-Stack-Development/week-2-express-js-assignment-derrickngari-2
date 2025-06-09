class CustomErrors extends Error {
    constructor(message, statusCode) {
        super(message)
        this.statusCode = statusCode
        this.isOperational = true
        Error.captureStackTrace(this, this.constructor)
    }
}

class NotFound extends CustomErrors {
    constructor(message = 'Resource not found') {
        super(message, 404)
    }
}

class ValidationError extends CustomErrors {
    constructor(message = 'Validation failed') {
        super(message, 400)
    }
}

module.exports = {
    CustomErrors,
    NotFound,
    ValidationError
}