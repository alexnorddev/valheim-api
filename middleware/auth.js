const express = require('express');

const middleware = express();

middleware.use((req, res, next) => {
    res.locals.auth = true;

    next();
});

module.exports = middleware;