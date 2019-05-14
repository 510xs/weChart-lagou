/**
 *   @搜索管理员
 */

const getInfo = require("../../daoImpl/getInfo");

let searchAdmin = function(req,res){
    //sql语句对象
    // let sql = `select * from admin where position('${req.body.userName}' in 'adminName') or position('1010091', in 'adminID')`
    let sql = `select * from admin where adminName like '%${req.body.userName}%' or adminID like '%${req.body.userPassWord}%'`;

    //获取数据列表
    getInfo(sql,(num,data)=>{
        res.send(data);
    })
}

module.exports = searchAdmin;