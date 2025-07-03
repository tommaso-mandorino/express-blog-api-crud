// Route not found handler function declaration
function routeNotFoundHandler(request, response, next) {

    // Get requested route
    const requestedRoute = request.originalUrl;

    // Set error code to 404 (not found)
    const errorCode = 404;

    // Create a response object to send as response
    const responseObject = {
        error: true,
        errorCode: errorCode,
        errorString: 'Not found',
        message: `Requested route '${requestedRoute}' not found.`
    };

    // Set response status code
    response.status(errorCode);

    // Send the response as JSON
    response.json(responseObject);

}

// Route not found handler function export
module.exports = routeNotFoundHandler;