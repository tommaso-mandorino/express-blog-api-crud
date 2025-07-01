// Posts importing
const posts = require('../data/posts.js');

// Express importing
const express = require('express');

// Router creation
const router = express.Router();

// Index
router.get('/', (request, response) => {

    // response.send('Lista di tutti i post.');

    // Send all posts as JSON
    response.json(posts);

});

// Show
router.get('/:id', (request, response) => {

    // Get ID parameter
    const id = request.params.id;

    response.send(`Post con ID: ${id}`);

});

// Store
router.post('/', (request, response) => {

    response.send('Aggiunta di un nuovo post');

});

// Update
router.put('/:id', (request, response) => {

    // Get ID parameter
    const id = request.params.id;

    response.send(`Modifica totale del post con ID: ${id}`);

});

// Modify
router.patch('/:id', (request, response) => {

    // Get ID parameter
    const id = request.params.id;

    response.send(`Modifica parziale del post con ID: ${id}`);

});

// Destroy
router.delete('/:id', (request, response) => {

    // Get ID parameter
    const id = request.params.id;

    response.send(`Eliminazione del post con ID: ${id}`);

});

// Router export
module.exports = router;