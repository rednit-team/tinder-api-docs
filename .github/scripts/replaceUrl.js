const { readFileSync, writeFileSync } = require('fs');
const { join } = require('path');
const url = process.argv[2] || './swagger.yml'

const urlString = 'url: "https://petstore.swagger.io/v2/swagger.json"'
const inputFile = readFileSync(join(__dirname, '../../docs/index.html')).toString()

const newFile = inputFile.replace(urlString, `url: "${url}"`)

writeFileSync(join(__dirname, '../../docs/index.html'), newFile)

