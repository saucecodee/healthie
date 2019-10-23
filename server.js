const http = require('http');
const app = require('express')();
const server = http.createServer(app);
const middlewares = require('./middleware');
const routes = require('./routes');

const databaseConfig = require('./config/db');
const port = process.env.PORT || 3030;

middlewares(app);
routes(app);

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).send({ msg: error.message });
});

server.listen(port, () => {
  console.log(`:: server listening on port ${port}`);
  databaseConfig();
});

// server.on('error', (error) => { console.log(`:: error: ${error}`); });
