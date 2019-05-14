/**
 *   @增加管理员
 */
const getInfo = require("../../daoImpl/getInfo");

let saveAdmin = function(req,res){
    //sql语句对象
    let sql = `insert into admin (adminName,adminPassWord) values ('${req.body.userName}','${req.body.userPassWord}')`;
    //执行插入操作
    getInfo(sql,(num,data)=>{
        res.send(data);
    })
}

module.exports = saveAdmin;