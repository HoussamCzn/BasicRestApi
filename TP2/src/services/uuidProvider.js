const uuid = require('uuid');

function getUUID(req, res, next) {
    req.query.id = uuid.v4();
    return next();
}

module.exports = {
    getUUID
}