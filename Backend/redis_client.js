var Promise = require("bluebird");
const redis = Promise.promisifyAll(require("redis"));
const client = redis.createClient(process.env.REDIS_URL);

client.on("error", function(error) {
    console.error(error);
});

module.exports = client;