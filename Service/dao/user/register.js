/**
 *  @用户注册
 */

const getInfo = require("../../daoImpl/getInfo");

let register = function(req,res){
    //sql语句对象
    // let sql = `insert into user (userName,userPassWord) values (${req.body.userName},${req.body.userPassWord})`;

    console.log(req.body)
       let sql = `insert into user (userName,userPassWord) values ('${req.body.userNmae}','${req.body.userPassWord}')`;
    //执行操作
    getInfo(sql,(num,data)=>{
        let code = 0;  //返回状态
        let msg = "";  //返回提示
        if(num == 0){  //有数据返回
            code =0;
            msg="注册成功"
        }
        if(num == 1){ //代码错误
            code = 1;
            msg = "后台代码错误";
        }
        // if(data.length <= 0){
        //     code = 2;
        //     msg = "注册失败"
        // }

        let obj = {
            code:code,
            data:[],
            msg:msg
        }
        res.send(obj);
    })
}

module.exports = register;