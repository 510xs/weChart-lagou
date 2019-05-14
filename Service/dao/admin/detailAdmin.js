/**
 *   @管理员详情
 * */

const getInfo = require("../../daoImpl/getInfo");

let detailAdmin = function(req,res){
    //sql语句
    let sql = `select * from admin where adminID='${req.body.adminID}'`;
    //执行操作
    getInfo(sql,(num,data)=>{
        res.send(data);
    })
}

module.exports = detailAdmin;