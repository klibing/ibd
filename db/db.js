/**
 * mysql链接
 * Created by libing on 2016/10/21.
 */
var mysql = require("mysql");
var config = require("../config/config");
var Pool = require('generic-pool').Pool;
var db = {};
var pool = new Pool({
    name     : 'mysql',
    create   : function(callback) {
        var c = mysql.createConnection(config.persist.mysql);
        // parameter order: err, resource
        callback(null, c);
    },
    destroy  : function(client) { client.end(); },
    max      : 10,
    // optional. if you set this, make sure to drain() (see step 3)
    min      : 2,
    // specifies how long a resource can stay idle in pool before being removed
    idleTimeoutMillis : 30000,
    // if true, logs via console.log - can also be a function
    log : true
});
//sql执行
db.query = function sqlback(sqllan, params, fn) {
    pool.acquire(function(err, client) {
        if (err) {
            // handle error - this is generally the err from your
            // factory.create function
        }
        else {
            client.query(sqllan, params, function(error, rows, fields) {
                console.log(sqllan);
                console.log(JSON.stringify(params));
                fn(rows);
                pool.release(client);
            });
        }
    });
}
module.exports = db;