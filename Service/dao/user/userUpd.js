/**
 *      @修改用户信息
 */

const getInfo = require("../../daoImpl/getInfo");

let userUpd = function(req,res){
    //修改用户信息sql语句
    let sql = `update user set userName='${req.body.userName}',userSex='${req.body.userSex}',userAge='${req.body.userAge}'`;
    //修改用户信息返回数据
    getInfo(sql,(num,data)=>{
        let code = 0;  //返回状态
        let msg = "";  //返回提示
        if(num == 0){  //有数据返回
            code =0;
            msg="修改数据成功"
        }
        if(num == 1){ //代码错误
            code = 1;
            msg = "后台代码错误";
        }
        if(data.length <= 0){
            code = 2;
            msg = "修改失败"
        }

        let obj = {
            code:code,
            data:[],
            msg:msg
        }
        res.send(obj);
    })
}

module.exports = userUpd;