 const { gql } = require('apollo-server');
 const { readFileSync } = require('fs');
 const path = require('path');

 // Types
 const example = readFileSync(path.join(__dirname, './example.gql'));

 // Query and mutations
 const query = readFileSync(path.join(__dirname, './query.gql'));
 const mutation = readFileSync(path.join(__dirname, './mutation.gql'));

 const schema = gql`
     ${example}
     ${query}
     ${mutation}
 `;

 module.exports = schema;