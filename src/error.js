class error extends Error {
    constructor(message){
        super();
        Error.captureStackTrace(this, this.constructor);
        this.name = 'error';
        this.message = message;
    }
}

module.exports = Error;