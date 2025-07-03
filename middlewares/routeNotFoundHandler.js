function routeNotFoundHandler(request, response, next) {

    const requestedRoute = request.originalUrl;

    const responseObject = {
        error: true,
        errorCode: 404,
        errorString: 'Not found',
        message: `Requested route '${requestedRoute}' not found.`
    }

    // Set 404 (not found) error code for the response
    response.status(404);

    // Send the response as JSON
    response.json(responseObject);

}

module.exports = routeNotFoundHandler;