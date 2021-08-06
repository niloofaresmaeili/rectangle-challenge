var express = require('express');
var server = express();
const bodyParser = require('body-parser')
var indexRouter = require('./index');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('.\/swagger.json');

const PORT = process.env.PORT || 3000;

server.use(bodyParser.json())
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
server.use('/', indexRouter);


server.listen(PORT, function () {
    console.log(`Example server listening on port ${PORT}.`);
});