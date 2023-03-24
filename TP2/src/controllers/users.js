const { find, insertOne } = require('../services/db/crud');

const collection = "users"

const createUser = async (req, res) => {
    try {
        console.log(req.query);
        const user = {
            lastName: req.query.lastName,
            firstName: req.query.firstName,
            email: req.query.email,
            birthdate: req.query.birthdate,
            watchlists: req.query.watchlists === undefined ? [] : req.query.watchlists.split(','),
            id: req.query.id
        };
        console.log(user);
        const result = await insertOne(collection, user);
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