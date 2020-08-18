var express = require('express');
var router = express.Router();
var RedisClient = require('../redis_client')
const { v4: uuidv4 } = require('uuid');

function user_key(id){
  return `user:${id}`
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  
});

router.post('/', async function(req, res) {
  let new_user = req.body.user;
  let new_id = uuidv4();
  new_user['id'] = new_id
  await RedisClient.HSETAsync(user_key(new_id), "id", new_id);
  await RedisClient.HSETAsync(user_key(new_id), "name", new_user.name);
  res.statusCode = 201
  res.send(new_user);
});

module.exports = router;
