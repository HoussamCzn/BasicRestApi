const { Router } = require('express');
const usersRouter = require('./users.routes');

const mainRouter = Router();

mainRouter.use('/users', usersRouter);

module.exports = mainRouter;