class ClientError extends Error{
    constructor(message, statusCode = 400){
        super(message)
        this.statusCode=statusCode
    }
}

class NotFoundError extends Error {
    constructor(message = "Not found in the database") {
        super(message);
        this.statusCode = 404; 
    }
}



module.exports = {ClientError, NotFoundError}