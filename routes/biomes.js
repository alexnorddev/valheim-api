const data = require('../data/biomes.json');
const express = require('express');

const route = new express.Router();

route.get('/', (req, res) => {
    const items = data.items;
    
    res.json({
        items: items,
        meta: {
            count: items.length
        }
    });
});

module.exports = route;