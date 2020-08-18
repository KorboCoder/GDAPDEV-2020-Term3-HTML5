var express = require('express');
var router = express.Router();
var RedisClient = require('../redis_client')
const { v4: uuidv4 } = require('uuid');
var User = require('../models/user')

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
  res.send({user: new_user});
});

router.get('/:id', async function(req, res, next) {
  let id = req.params.id
  let user = await RedisClient.HGETALLAsync(user_key(id));
  if(user ==  null){
    res.sendStatus(404)
    return;
  }
  res.send({user: user});
  
});

router.put('/:id', async function(req, res, next) {
  let update_user = new User(req.body.user);
  let id = req.params.id
  let exists = await RedisClient.EXISTSAsync(user_key(id))
  if(!exists){
    res.sendStatus(404)
    return;
  }
  update_user['id'] = id
  for(let entry of Object.entries(update_user)){
    await RedisClient.HSETAsync(user_key(id), entry[0], entry[1]);
  }
 
  
  res.send({user: update_user});
  
});

router.patch('/:id', async function(req, res, next) {
  let id = req.params.id
  let exists = await RedisClient.EXISTSAsync(user_key(id))

  if(!exists){
    res.sendStatus(404)
    return;
  }
  
  let dummy_user = new User({});
  for(let key of Object.keys(dummy_user)){
    console.log(key)
    if(req.body.user[key]){
      await RedisClient.HSETAsync(user_key(id), key, req.body.user[key]);
    }
  }
  res.sendStatus(204)

});

router.delete('/:id', async function(req, res, next) {
  let id = req.params.id
  let success = await RedisClient.DELAsync(user_key(id))
  if(!success){
    res.sendStatus(404)
    return;
  }

  res.sendStatus(204)

});

module.exports = router;
