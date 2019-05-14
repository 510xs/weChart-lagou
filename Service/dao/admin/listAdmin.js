/**
 *  @管理员列表
 */

const getInfo = require("../../daoImpl/getInfo");

let listAdmin = function(req,res){

    //sql语句对象
    let sql = `select * from admin`;

    //获取数据列表
    getInfo(sql,(num,data)=>{
        res.send(data);
    })
}

module.exports = listAdmin;