/**
 * Created by libing on 2016/10/27.
 */
var mysql = require("../db/db");

function User(user) {
    this.id = user.id;
    this.username = user.username;
    this.password = user.password;
    this.mobile = user.mobile;
    this.email = user.email;
    this.salt = user.salt;
    this.name = user.name;
    this.title = user.title;
    this.org_id = user.org_id;
    this.owner_id = user.owner_id;
    this.status = user.status;
    this.is_admin = user.is_admin;
    this.create_date = user.create_date;
    this.create_by = user.create_by;
    this.updated_date = user.updated_date;
    this.updated_by = user.updated_by;
}

module.exports = User;

//获取所有
User.prototype.getAll = function (callback) {
    var sql = "select * from user";
    mysql.query(sql,null,callback);
}

//根据主键获取数据
User.prototype.getById = function (callback) {
    var sql = "select * from user u where u.id = ?";
    var params = [this.id];
    mysql.query(sql, params, function (results) {
        callback(results[0]);
    });
}
//id存在即为更新， id不存在即为增加
User.prototype.add = function (callback) {
    if(null != this.id) {
        this.getById(function (result) {
            if(null != result) {
                this.updateById(callback);
            }
        });
    } else {
        var sql = "INSERT INTO user (`id`, `username`, `mobile`, `email`, `password`, `salt`, `name`, `title`, `org_id`, `owner_id`, `status`, `is_admin`, `create_date`, `create_by`, `updated_date`, `updated_by`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,now(),'system',now(),'system');";
        var params = [
            this.id,
            this.username,
            this.mobile,
            this.email,
            this.password,
            this.salt,
            this.name,
            this.title,
            this.org_id,
            this.owner_id,
            this.status,
            this.is_admin
        ];
        mysql.query(sql, params, callback);
    }
}
//根据主键更新数据
User.prototype.updateById = function (callback) {
    var sql = "update user set username = ?, password = ? where id = ?";
    var params = [
        this.username,
        this.password,
        this.id
    ];
    mysql.query(sql, params, callback);
}
//根据主键删除数据
User.prototype.deleteById = function (callback) {
    var sql = "delete from user where id = ?"
    var params = [this.id];
    mysql.query(sql, params, callback);
}

//根据用户名查找数据
User.prototype.getByUsername = function getByUsername(callback) {
    var sql = "select * from user u where u.username = ?";
    var params = [
        this.username
    ];
    mysql.query(sql, params, callback);
}
