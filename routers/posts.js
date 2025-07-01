// Posts importing
const posts = require('../data/posts.js');

// Express importing
const express = require('express');

// Router creation
const router = express.Router();

/**
 * 
 * @param {string} id The ID to search in the objects array
 * @param {Array<object>} objectsArray Objects array where to search for specified ID
 * @returns {object | undefined} Object with specified ID | undefined if ID is not found
 */
function idExists(id, objectsArray) {

    const findResult = objectsArray.find(object => {

        // Get current object ID casted to string, so this method works both if ID is a string or a number
        const currentObjectID = String(object.id);

        // Return this object if IDs are identical
        return currentObjectID === id;

    });

    return findResult;

}

// Index
router.get('/', (request, response) => {

    // response.send('Lista di tutti i post.');

    // Get tag query sting
    const tagQueryString = request.query.tag;

    // IF tag query sting is present
    if (request.query.tag) {

        // Filter posts by it
        const filteredPosts = posts.filter(post => post.tags.includes(tagQueryString));

        // Send filtered posts as JSON
        response.json(filteredPosts);

        return;
    }

    // Send all posts as JSON
    response.json(posts);

});

// Show
router.get('/:id', (request, response) => {

    // Get ID parameter
    const parameterID = request.params.id;

    // response.send(`Post con ID: ${id}`);

    // Capture post by its ID
    const post = idExists(parameterID, posts);

    // Send post as JSON
    response.json(post);

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
    const parameterID = request.params.id;

    // response.send(`Eliminazione del post con ID: ${id}`);

    // Capture post by its ID
    const post = idExists(parameterID, posts);

    // Get post index in the objects array
    const postIndex = posts.indexOf(post);

    // Delete post with specified ID from objects array
    posts.splice(postIndex, 1);

    // Log all remaining posts
    console.log(posts);

    // Send no content response
    response.sendStatus(204);

});

// Router export
module.exports = router;