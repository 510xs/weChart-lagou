/**
 *  @删除管理员
 */

const  getInfo = require("../../daoImpl/getInfo");

let delAdmin = function(req,res){
    //sql语句对象
    let sql = `delete from admin where adminID='${req.body.adminID}' and adminName='${req.body.adminName}'`;

    //执行删除操作
    getInfo(sql,(num,data)=>{
        res.send(data);
    })
}

module.exports = delAdmin;