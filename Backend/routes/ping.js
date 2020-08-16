var express = require('express');
var RedisClient = require('../redis_client')

var router = express.Router();

router.get('/', async function(req, res, next) {
    let pong = await RedisClient.PINGAsync();
    res.send({message: pong});
});

module.exports = router;