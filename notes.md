# Web API Testing

## Objectives

- setup Jest for testing 'Node.js' code.
- write tests for API endpoints.

- use Heroku Postgres in production.

component(props) => UI;

function(args) => value;

endpoint(data) => response;


npm i -D supertest
npm i -D jest
### npm i -g jest (may need sudo)
jest --init
add jest.config.js that allows you to turn things on and off using JS
check to make sure "test environment" is node
OR add this to package.json
  "jest": {
    "testEnvironment": "node"
  }

and change "test": "jest --watch" (not watch all)


### yarn add supertest
1. run the server --> request(server) 
    this needs a return of the promise as it is an asynchronous operation
2. make a request --> .get('/')
3. inspect the response to check for assumptions --> .expect(number)


IN THE TEST FILE, require following

const request = require('supertest');

const server = require('./server')


# CONNECTING TO POSTGRES
for disconnecting local repo to a new origin, don't need this as we're already forked

1. create new private repo in github
2. copy url
3. detach current repo and link to new repo
 git remote set-url origin 

1. in knexfile.js, copy the 'development' settings, call it production
2. the dbConfig file shows that we're using development, when deploying to heroku, need to point to production
3. create new application on heroku, connect to github repo
4. 