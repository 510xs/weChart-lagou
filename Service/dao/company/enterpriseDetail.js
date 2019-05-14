/**
 *      @企业详情
 */

const getInfo = require('../../daoImpl/getInfo');

let enterpriseDetail = function(req,res){
    //初始化返回对象
    let obj ={
        code:0,
        data:[],
        msg:'success'
    }

    if(!req.body.companyID){
        obj.code = 2;
        obj.msg = '企业编号不能为空';
    }

    //sql语句
    let sql = `select * from enterprise where companyID = ${req.body.companyID}`;

    //执行操作
    getInfo(sql,(num,data)=>{
        if(num == 1){
            obj.code= 1;
            obj.msg = '攻城师已阵亡，请拨打120';
        }
        if(num == 0){
            obj.data = data;
        }

        res.send(obj);
    })
}

module.exports = enterpriseDetail;