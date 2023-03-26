const express = require('express');
const { getUUID } = require('../services/uuidProvider');
const itemSchema = require('../schemas/item.schema')
const { validateSchemaMiddleware } = require('../services/schemaValidator');
const { createItem, getItems } = require('../controllers/items');

const router = express.Router();

router.post("/create", getUUID, validateSchemaMiddleware(itemSchema), createItem);
router.get("/retrieve", getItems);

module.exports = router;