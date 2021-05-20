const converter = require('postman-to-openapi');

// Postman Collection Path
const postmanCollection =  './tinder_api_docs.postman_collection.json'
// Output OpenAPI Path
const outputFile = './docs/swagger.yml'

;(async function main() {
// Async/await
    try {
        const result = await converter(postmanCollection, outputFile, {defaultTag: 'Tinder'})
    } catch (err) {
        console.log(err)
    }
})();