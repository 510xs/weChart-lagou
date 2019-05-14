/**
 *  @修改数据
 */

const getInfo = require("../../daoImpl/getInfo");

let updAdmin = function(req,res){
    //sql语句
    let sql = `update admin set adminName=${req.body.adminName} where adminID='${req.body.adminID}'`;
    //执行修改操作
    getInfo(sql,(num,data)=>{
        res.send(data);
    })
}

module.exports = updAdmin;