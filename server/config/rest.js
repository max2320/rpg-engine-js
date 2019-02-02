import express from 'express';
import bodyParser from 'body-parser';
import graphqlHTTP from 'express-graphql';

const app = express();

app.use('/graphql',graphqlHTTP({
  ...process.graphql,
  graphiql: process.env.GRAPHIQL
}));

app.get('*', (request, response) => {
  response.writeHead(404);
  response.end();
});

export {app};
