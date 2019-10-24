const debug = require('debug')('serverb:config');
const config = require('config');

module.exports = function () {
    debug(config.get('name'));
}