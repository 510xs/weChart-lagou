/**
 *  @管理员
 *
 */
const listInfo = require("../daoImpl/listInfo");

let saveUser = function(req,res){
        // console.log(req.body,"获取数据");
    listInfo("select * from admin",(data)=>{
        console.log(data,"获取的用户信息");
        res.send(data);
    });
}

module.exports = saveUser;