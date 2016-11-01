/**
 * Created by libing on 2016/10/26.
 */
var Redis = require("ioredis");
var config = require("../config/config");

Cluster = function(){
    return new Redis.Cluster(config.cache.redis);
}
module.exports = Cluster;
