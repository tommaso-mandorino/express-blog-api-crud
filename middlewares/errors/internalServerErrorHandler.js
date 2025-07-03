// Internal server error handler function declaration
function internalServerErrorHandler(error, request, response, next) {

    // Set error code to 500 (internal server error)
    const errorCode = 500;

    // Create a response object to send as response
    const responseObject = {
        error: true,
        errorCode: errorCode,
        errorString: 'Internal server error',
        message: `Error: '${error.message}'`
    };

    console.log(error)

    // Set response status code
    response.status(errorCode);

    // Send the response as JSON
    response.json(responseObject);

}

// Internal server error handler function export
module.exports = internalServerErrorHandler;