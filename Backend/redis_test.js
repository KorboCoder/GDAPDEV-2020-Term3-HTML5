var Promise = require("bluebird");
const redis = Promise.promisifyAll(require("redis"));
const client = redis.createClient();

client.on("error", function(error) {
    console.error(error);
});

function redisPrint(res){
    console.log(res)
}

async function redisStringCalls(){
    console.log("SET");
    await client.SETAsync("myKey", "myValue").then(redisPrint);
    console.log("---");
    console.log("GET");
    await client.GETAsync("myKey").then(redisPrint);
    console.log("---");
    console.log("EXISTS");
    await client.EXISTSAsync("myKey").then(redisPrint);
    console.log("---");
    console.log("DEL");
    await client.DELAsync("myKey").then(redisPrint)
    console.log("---");
    console.log("EXISTS");
    await client.EXISTSAsync("myKey").then(redisPrint);
    console.log("---");
    console.log("SET");
    await client.SETAsync("score", 0).then(redisPrint);
    console.log("---");
    console.log("INCR");
    await client.INCRAsync("score").then(redisPrint);
    console.log("---");
    console.log("GET");
    await client.GETAsync("score").then(redisPrint);
    console.log("---");
    console.log("DECR");
    await client.DECRAsync("score").then(redisPrint);
    console.log("---");
    console.log("GET");
    await client.GETAsync("score").then(redisPrint);
    console.log("---");
    console.log("INCRBY");
    await client.INCRBYAsync("score", 10).then(redisPrint);
    console.log("---");
    console.log("GET");
    await client.GETAsync("score").then(redisPrint);

    /*
    Add more commands here
    */

    await client.flushdbAsync();
}

redisStringCalls();