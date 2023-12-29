class ApiError extends Error {
    constructor(
        statusCode,
        message='something went wrong',
        errors=[],
        stack=''
    ) {
        super(message);
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success = false;
        this.errors = errors;

        if ( this.stack ) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export { ApiError }