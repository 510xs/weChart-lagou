/**
 *    @用户详情
 */
const getInfo = require("../../daoImpl/getInfo");

let userDetail = function(req,res){
    //用户详情sql
    let sql = `select * from user where userID='${req.body.userID}' and userName='${req.body.userName}'`;
    //用户详情返回值
    getInfo(sql,(num,data)=>{
        let code = 0;  //返回状态
        let msg = "";  //返回提示
        if(num == 0){  //有数据返回
            code =0;
            msg="用户详情"
        }
        if(num == 1){ //代码错误
            code = 1;
            msg = "后台代码错误";
        }
        if(data.length <= 0){
            code = 2;
            msg = "未获取用户详情"
        }

        let obj = {
            code:code,
            data:data?data:[],
            msg:msg
        }
        res.send(obj);
    })
}

module.exports = userDetail;