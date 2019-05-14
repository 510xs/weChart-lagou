/**
 *  @用户登录
 */

const getInfo = require("../../daoImpl/getInfo");

let login = function(req,res){
    //用户登录sql语句
    // console.log(req.body)
    let sql = `select userID,userName,description,userImg from user where userName='${req.body.userName}' and userPassWord='${req.body.userPassWord}'`;
    //用户登录返回数据
    getInfo(sql,(num,data)=>{
        let code = 0;  //返回状态
        let msg = "";  //返回提示
        if(num == 0){  //有数据返回
            code =0;
            msg="登录成功"
        }
        if(num == 1){ //代码错误
            code = 1;
            msg = "后台代码错误";
        }
        if(data.length <= 0){
            code = 2;
            msg = "此用户不存在，请注册"
        }

        let obj = {
            code:code,
            data:data?data:[],
            msg:msg
        }
        res.send(obj);
    })
}

module.exports = login;