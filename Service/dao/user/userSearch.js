/**
 *  @搜索用户
 */

const getInfo = require("../../daoImpl/getInfo");

let userSearch = function(req,res){
    //sql语句
    let sql= `select userID,userName,userSex,userAge,userImg from user where userID like '${req.body.params}' or userName like '${req.body.params}'`;
    //返回值
    getInfo(sql,(num,data)=>{
        let code = 0;  //返回状态
        let msg = "";  //返回提示
        if(num == 0){  //有数据返回
            code =0;
            msg="搜索列表"
        }
        if(num == 1){ //代码错误
            code = 1;
            msg = "后台代码错误";
        }
        if(data.length <= 0){
            code = 2;
            msg = "未搜索到数据，请重新输入数据搜索";
        }

        let obj = {
            code:code,
            data:data?data:[],
            msg:msg
        }
        res.send(obj);
    })
}

module.exports = userSearch;