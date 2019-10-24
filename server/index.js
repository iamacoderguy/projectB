const winston = require('winston');
const app = require('./startups/app');
const { getServerPort } = require('./helpers/networkHelper');

console.info('To enable debug mode, set env DEBUG=serverb:*');

const port = getServerPort();
const server = app.listen(port, () => winston.info(`Listening on port ${port}...`));

module.exports = server;