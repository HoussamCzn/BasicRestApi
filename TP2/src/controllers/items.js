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

const getItems = async (req, res) => {
    try {
        let result;
        if (Object.keys(req.query).length === 0) {
            result = await find(collection);
        } else {
            const item_title = req.query.title ? req.query.title : "";
            const item_genre = req.query.genre ? req.query.genre : "";
            const item_language = req.query.language ? req.query.language : "";
            const item_duration = req.query.duration ? req.query.duration : "";
            const item_imdbId = req.query.imdbId ? req.query.imdbId : "";
            const item_id = req.query.id ? req.query.id : "";
            result = await find(collection, {
                title: {
                    $regex: item_title,
                },
                genre: {
                    $regex: item_genre,
                },
                language: {
                    $regex: item_language,
                },
                duration: {
                    $regex: item_duration,
                },
                imdbId: {
                    $regex: item_imdbId,
                },
                id: {
                    $regex: item_id,
                }
            });
        }
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
    createItem,
    getItems
}