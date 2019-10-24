const client = require('../routes/client');
const error = require('../middlewares/error');

module.exports = function (app) {
    app.use('/', client);
    app.use(error);
}