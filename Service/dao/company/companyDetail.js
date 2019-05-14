/**
 *   @职位详情
 */

const getInfo = require('../../daoImpl/getInfo');

let companyDetail = function(req,res){
    //sql语句
    let sql = `select * from company where companyName = '${req.body.companyName}' and positionName = '${req.body.companyType}'`;
    //执行操作
    getInfo(sql,(num,data)=>{
        let code = 0;  //返回状态
        let msg = "";  //返回提示
        if(num == 0){  //有数据返回
            code =0;
            msg="操作成功"
        }
        if(num == 1){ //代码错误
            code = 1;
            msg = "后台代码错误";
        }
        if(data.length <= 0){
            code = 2;
            msg = "未获取用户数据"
        }

        let obj = {
            code:code,
            data:data?data:[],
            msg:msg
        }
        res.send(obj);
    })
}

module.exports = companyDetail;