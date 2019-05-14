/**
 *     @用户修改密码
 */

const getInfo = require("../../daoImpl/getInfo");

let userUpdPwd = function(req,res){
    //用户修改密码sql语句
    let sql = `update user set userPassWord='${req.body.userPassWord}' where userID='${req.body.userID}' and userName='${req.body.userName}'`;
    //执行修改密码操作
    getInfo(sql,(num,data)=>{
        let code = 0;  //返回状态
        let msg = "";  //返回提示
        if(num == 0){  //有数据返回
            code =0;
            msg="修改成功"
        }
        if(num == 1){ //代码错误
            code = 1;
            msg = "修改失败";
        }
        if(data.length <= 0){
            code = 2;
            msg = "未修改，请重新操作"
        }

        let obj = {
            code:code,
            data:data?data:[],
            msg:msg
        }
        res.send(obj);
    })
}

module.exports = userUpdPwd;