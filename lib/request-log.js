const debug = require('debug')('lib:log');

module.exports = (req, res, next) => {
    debug("RECEIVED REQUEST:", req.method, req.url);
    next();
};
