// Port importing from .env file
const PORT = process.env.PORT;

// Router importing
const postsRouter = require('./routers/posts.js');

// Internal server error handler importing
const internalServerErrorHandler = require('./middlewares/errors/internalServerErrorHandler.js');

// Route not found handler importing
const routeNotFoundHandler = require('./middlewares/errors/routeNotFoundHandler.js');

// Express importing
const express = require('express');

// Express server creation
const server = express();

// Static assets use
server.use(express.static('public'));

// JSON body parser use
server.use(express.json());

// Posts router use
server.use('/posts', postsRouter);

// Root route
server.get('/', (request, response) => {

    response.send('Benvenuto nel server dei <a href="./posts/">posts</a>.');

});

// Server error handler use
server.use(internalServerErrorHandler);

// Route not found handler use
server.use(routeNotFoundHandler);

// Start server listening
server.listen(PORT, () => {

    console.log(`Server is listening on http://localhost:${PORT}...`);

});