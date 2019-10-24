const http = require('http');
const app = require('express')();
const server = http.createServer(app);

const middlewares = require('./middleware');
const errorMiddlewares = require('./middleware/errorMiddleware');
const routes = require('./routes');

const databaseConfig = require('./config/db');
const port = process.env.PORT || 3030;

middlewares(app);

app.use('/api', routes())

errorMiddlewares(app);


server.listen(port, () => {
  console.log(`:: server listening on port ${port}`);
  databaseConfig();
});

// server.on('error', (error) => { console.log(`:: error: ${error}`); });
