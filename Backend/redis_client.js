var Promise = require("bluebird");
const redis = Promise.promisifyAll(require("redis"));
const client = redis.createClient();

client.on("error", function(error) {
    console.error(error);
});

module.exports = client;