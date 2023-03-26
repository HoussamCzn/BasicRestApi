const validate = require("jsonschema").validate;
const _ = require("lodash");

function _matchSchema(schema, item) {
    for (const [name, property] of Object.entries(schema.properties)) {
        if (property.type === "array") {
            const arr = [];
            item[name] = item[name].split(",").map((item) => item.trim());
            if (property.items.type === "object") {
                const size = Object.keys(property.items.properties).length;
                for (let i = 0; i < item[name].length; i += size) {
                    arr.push(
                        {
                            item_id: item[name][i],
                            status: item[name][i + 1],
                        }
                    );
                }
                item[name] = arr;
            } else {
                item[name].forEach((item) => {
                    if (property.items.type === "number") {
                        item = Number(item);
                    }
                });
            }
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