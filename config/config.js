/**
 * Created by libing on 2016/10/26.
 */
var config = {
    //缓存
    cache:{
        redis:[{
            port: 6379,
            host: '192.168.93.42'
        },{
            port: 6380,
            host: '192.168.93.42'
        }, {
            port: 6381,
            host: '192.168.93.42'
        },{
            port: 6382,
            host: '192.168.93.42'
        },{
            port: 6383,
            host: '192.168.93.42'
        },{
            port: 6384,
            host: '192.168.93.42'
        }]
    },
    //数据库
    persist:{
        mysql:{
            host:"192.168.82.41",
                user:"root",
                password:"123456",
                database:"ibd_sp",
                port:3306
        }
    }
};
module.exports = config;
