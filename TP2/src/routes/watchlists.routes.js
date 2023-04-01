const express = require('express');
const { getUUID } = require('../services/uuidProvider');
const watchlistsSchema = require('../schemas/watchlist.schema')
const { validateSchemaMiddleware } = require('../services/schemaValidator');
const {
    createWatchlist, addItemToWatchlist, getWatchlistContent, editItemStatus, getUserWatchlists
} = require('../controllers/watchlists');

const router = express.Router();

router.post("/create", getUUID, validateSchemaMiddleware(watchlistsSchema), createWatchlist);
router.post("/add/item", addItemToWatchlist);
router.get("/content", getWatchlistContent);
router.post("/edit/status", editItemStatus);
router.get("/user/watchlists", getUserWatchlists);

module.exports = router;