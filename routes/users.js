/**
 * Created by libing on 2016/10/31.
 */
var express = require("express");
var router = express.Router();

var $ = require("../controllers/user_controller");

/**
 * GET /users/:id           => user.show //查询单条
 * GET /users[/]            => user.list //列表
 * GET /users/:id/edit      => user.edit //编辑
 * POST /users[/]           => user.create //创建
 * GET /users/:id/delete    => user.delete //删除
 */

//编辑
router.get("/:id/edit", $.edit);
//删除
router.get("/:id/delete", $.delete);
//查询单条
router.get("/:id/show", $.show);

//此路径是列表和创建
router.route("/")
    .get($.list)
    .post($.create);


module.exports = router;