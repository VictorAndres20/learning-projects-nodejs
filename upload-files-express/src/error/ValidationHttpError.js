class ValidationHttpError extends Error{
    constructor(message, codeHttp){
        super(message);
        this.codeHttp = codeHttp;
    }
}

module.exports = ValidationHttpError;