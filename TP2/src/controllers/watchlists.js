const { find, insertOne, findOne, updateOne } = require('../services/db/crud');

const collection = "watchlists"

const createWatchlist = async (req, res) => {
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

const addItemToWatchlist = async (req, res) => {
    try {
        const item = JSON.parse(req.query.item);
        const result = await updateOne(collection,
            {
                name: req.query.name
            },
            {
                $push: {
                    items: item
                }
            }
        )
        return res.status(200).json(result);
    } catch (err) {
        return res.status(500).json(
            {
                error: err.message,
            }
        );
    }
}

const editItemStatus = async (req, res) => {
    try {
        const result = await updateOne(collection,
            {
                name: req.query.name,
                "items.item_id": req.query.item_id
            },
            {
                $set: {
                    "items.$.status": req.query.status
                }
            }
        )
        return res.status(200).json(result);
    } catch (err) {
        return res.status(500).json(
            {
                error: err.message,
            }
        );
    }
}

const getWatchlistContent = async (req, res) => {
    try {
        const watchlist = await findOne(collection,
            {
                name: req.query.name
            }
        )
        return res.status(200).json(watchlist.items);
    } catch (err) {
        return res.status(500).json(
            {
                error: err.message,
            }
        );
    }
}

const getUserWatchlists = async (req, res) => {
    try {
        const result = await find(collection,
            {
                owner: req.query.owner
            }
        )
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
    createWatchlist,
    addItemToWatchlist,
    getWatchlistContent,
    editItemStatus,
    getUserWatchlists
}