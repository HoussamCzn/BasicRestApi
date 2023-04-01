const validate = require("jsonschema").validate;
const _ = require("lodash");

function _matchSchema(schema, item) {
    for (const [name, property] of Object.entries(schema.properties)) {
        if (property.type === "array") {
            if (property.items.type === "object") {
                item[name] = JSON.parse(item[name]);
            } else {
                item[name] = item[name].split(",");
                item[name] = item[name].map((item) => item.trim());
                if (property.items.type === "number") {
                    item[name] = item[name].map((item) => Number(item));
                }
            }
        } else if (property.type === "object") {
            item[name] = JSON.parse(item[name]);
        } else if (property.type === "number") {
            item[name] = Number(item[name]);
        }
    }
}

function validateSchemaMiddleware(schema) {
    return (req, res, next) => {
        item = req.query;
        _matchSchema(schema, item);
        const validation = validate(item, schema);
        if (_.isEmpty(validation.errors)) {
            return next();
        } else {
            return res.status(400).send(validation.errors);
        }
    };
}

module.exports = {
    validateSchemaMiddleware
};