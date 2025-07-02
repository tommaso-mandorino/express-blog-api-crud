// Posts importing
const posts = require('../data/posts.js');

/**
 * Check if a post with specified ID exists
 * @param {string} id The ID to search in the objects array
 * @param {Array<object>} objectsArray Objects array where to search for specified ID
 * @param {object} responseObject Response object which will return 404 code and message to client if post is not found
 * @returns {object | flase} Object with specified ID | false if ID is not found
 */
function postExists(id, objectsArray, responseObject) {

    const findResult = objectsArray.find(object => {

        // Get current object ID casted to string, so this method works both if ID is a string or a number
        const currentObjectID = String(object.id);

        // Return this object if IDs are identical
        return currentObjectID === id;

    });

    // IF post with specified ID was not found
    if (!findResult) {

        // Return JSON with error details
        responseObject.status(404).json(
            {
                error: true,
                errorCode: 404,
                errorString: 'Not found',
                message: `Post with ID ${id} not found.`
            }
        );

        return false;

    }

    return findResult;

}

// Index
function index(request, response) {

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

}

// Show
function show(request, response) {

    // Get ID parameter
    const parameterID = request.params.id;

    // response.send(`Post con ID: ${id}`);

    // Capture post by its ID
    const post = postExists(parameterID, posts, response);

    // IF post was not found
    if (!post) {

        return;

    }

    // Send post as JSON
    response.json(post);

}

// Store
function store(request, response) {
    
    // Get request body
    const newPost = request.body;

    console.log('\nÈ arrivato un nuovo post:\n');
    
    console.log(newPost);
    
    response.send('Aggiunta di un nuovo post');

};

// Update
function update(request, response) {

    // Get ID parameter
    const id = request.params.id;

    response.send(`Modifica totale del post con ID: ${id}`);

}

// Modify
function modify(request, response) {

    // Get ID parameter
    const id = request.params.id;

    response.send(`Modifica parziale del post con ID: ${id}`);

}

// Destroy
function destroy(request, response) {

    // Get ID parameter
    const parameterID = request.params.id;

    // response.send(`Eliminazione del post con ID: ${id}`);

    // Capture post by its ID
    const post = postExists(parameterID, posts, response);

    // IF post was not found
    if (!post) {

        return;

    }

    // Get post index in the objects array
    const postIndex = posts.indexOf(post);

    // Delete post with specified ID from objects array
    posts.splice(postIndex, 1);

    console.log('\n-------------------\n| Remaining posts |\n-------------------\n');

    // Log all remaining posts
    console.log(posts);

    // Send no content response
    response.sendStatus(204);

}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
};