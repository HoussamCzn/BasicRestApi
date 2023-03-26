const { find, insertOne } = require('../services/db/crud');

const collection = "items"

const createItem = async (req, res) => {
    try {
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

module.exports = {
    createItem
}