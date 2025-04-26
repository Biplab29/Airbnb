class ExpressError extends Error {
    constructor(statusCode, message) {
        super(); // Call the parent class constructor (Error)
        this.statusCode = statusCode; // Set the status code
        this.message = message; // Set the error message
    }
}

module.exports = ExpressError; // Export the class for use in other files