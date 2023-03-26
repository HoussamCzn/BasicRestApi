const { Router } = require('express');
const usersRouter = require('./users.routes');
const itemsRouter = require('./items.routes');
const watchlistsRouter = require('./watchlists.routes');

const mainRouter = Router();

mainRouter.use('/users', usersRouter);
mainRouter.use('/items', itemsRouter);
mainRouter.use('/watchlists', watchlistsRouter);

module.exports = mainRouter;