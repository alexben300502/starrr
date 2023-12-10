var redis = require("redis");
const configure = require('./configure')

const config = configure()
var db = redis.createClient({
  host: config.redis.host,
  port: config.redis.port,
  retry_strategy: () => {
    // This will trigger when the retry strategy does not succeed
    return new Error("Retry time exhausted");
  }
})

// Error event listener
db.on('error', function(err) {
  console.error('Redis error:', err);
});

process.on('SIGINT', function() {
  db.quit();
});

module.exports = db
