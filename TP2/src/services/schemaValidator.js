const validate = require("jsonschema").validate;
const _ = require("lodash");

function validateSchemaMiddleware(schema) {
    return (req, res, next) => {
        item = req.query;
        const validation = validate(item, schema);
        if (_.isEmpty(validation.errors)) {
            return next();
        } else {
            return res.status(400).send(validation.errors);
        }
    };
}

function validateSchema(schema, item) {
    const validation = validate(item, schema);    
    if (_.isEmpty(validation.errors)) {
        return true;
    } else {
        return validation.errors;
    }
}

module.exports = {
    validateSchemaMiddleware,
    validateSchema,
};