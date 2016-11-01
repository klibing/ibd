/**
 * Created by libing on 2016/10/31.
 */
var User = require("../models/user");
var crypto = require("crypto");

//列表
exports.list = function (req, res, next) {
    var user = new User({

    });
    user.getAll(function (results) {
       res.render("users/list", {users:results});
    });
}
//创建或更新数据
exports.create  = function (req, res, next) {
    var username = req.body.username;
    var password = crypto.createHash("md5").update(req.body.password).digest("base64");
    var user = new User({
        username:username,
        password:password
    });
    user.add(function (result) {
        res.redirect("/");
    });
}
//查询某一条
exports.show = function (req, res, next) {
    var id = req.param("id");
    var user = new User({
        id:id
    });
    user.getById(function (result) {
       res.render("users/show", {user:result});
    });
}
//删除某条
exports.delete = function (req, res, next) {
    var id = req.param("id");
    var user = new User({
        id:id
    });
    user.deleteById(function (result) {
        res.redirect("/users");
    });
}

exports.edit = function (req, res, next) {
    var id = req.param("id");
    var user = new User({
        id:id
    });
    user.getById(function (result) {
        res.render("users/edit", {user:result});
    });
}