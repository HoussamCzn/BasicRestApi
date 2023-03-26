const express = require('express');
const { getUUID } = require('../services/uuidProvider');
const watchlistsSchema = require('../schemas/watchlist.schema')
const { validateSchemaMiddleware } = require('../services/schemaValidator');
const { createWatchlist } = require('../controllers/watchlists');

const router = express.Router();

router.post("/create", getUUID, validateSchemaMiddleware(watchlistsSchema), createWatchlist);

module.exports = router;