/**
 *  @用户注销
 */

const getInfo = require("../../daoImpl/getInfo");

let userDel = function(req,res){
    //用户注销sql语句
    let sql = `delete from user where userID='${req.body.userID}' and userName='${req.body.userName}'`;
    //用户注销返回值
    getInfo(sql,(num,data)=>{
        let code = 0;  //返回状态
        let msg = "";  //返回提示
        if(num == 0){  //有数据返回
            code =0;
            msg="注销成功"
        }
        if(num == 1){ //代码错误
            code = 1;
            msg = "后台代码错误";
        }
        if(data.length <= 0){
            code = 2;
            msg = "用户删除失败"
        }

        let obj = {
            code:code,
            data:data?data:[],
            msg:msg
        }
        res.send(obj);
    })
}

module.exports = userDel;