class CustomApiError extends Error{
    constructor(message, statusCode){
        super(message);
        this.status = statusCode;
    }
} 

const createCustomError = (msg, statusCode) => {
     return new CustomApiError(msg, statusCode);
}

module.exports = {CustomApiError, createCustomError};