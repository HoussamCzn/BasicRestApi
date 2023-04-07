const { find, insertOne } = require('../services/db/crud');

const collection = "users"

const createUser = async (req, res) => {
    try {
        req.query.lastName = req.query.lastName.toUpperCase();
        req.query.firstName = req.query.firstName.charAt(0).toUpperCase() + req.query.firstName.slice(1);
        const result = await insertOne(collection, req.query);
        return res.status(200).json(result);
    } catch (err) {
        return res.status(500).json(
            {
                error: err.message,
            }
        );
    }
}

const getUsers = async (req, res) => {
    try {
        const result = await find(collection);
        return res.status(200).json(result);
    } catch (err) {
        return res.status(500).json(
            {
                error: err.message
            }
        );
    }
}

module.exports = {
    createUser,
    getUsers
}