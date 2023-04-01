const express = require('express');
const { getUUID } = require('../services/uuidProvider');
const itemSchema = require('../schemas/item.schema')
const { validateSchemaMiddleware } = require('../services/schemaValidator');
const { getMovieByTitle } = require('../repositories/omdbApi');
const { createItem, getItems } = require('../controllers/items');

const router = express.Router();

router.post("/create", getMovieByTitle, getUUID, validateSchemaMiddleware(itemSchema), createItem);
router.get("/items", getItems);

module.exports = router;