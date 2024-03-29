const express = require('express');
const { getUUID } = require('../services/uuidProvider');
const userSchema = require('../schemas/user.schema')
const { validateSchemaMiddleware } = require('../services/schemaValidator');
const { createUser, getUsers } = require('../controllers/users');

const router = express.Router();

router.post("/create", getUUID, validateSchemaMiddleware(userSchema), createUser);
router.get("/users", getUsers);

module.exports = router;