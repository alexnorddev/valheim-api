const express = require('express');

const middleware = express();

middleware.use('/', (req, res, next) => {
    console.log(req.method.toString());
    console.log('Auth:', res.locals.auth);
    
    next();
});

module.exports = middleware;