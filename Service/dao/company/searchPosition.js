/**
 *  @搜索职位
 */

const getInfo = require('../../daoImpl/getInfo');

let positionSearch = function(req,res){
    //初始化返回对象
    let obj ={
        code:0,
        data:[],
        msg:'success'
    }

    if(!req.body.params){
        obj.code = 2;
        obj.msg = '查询条件不能为空';
    }

    //sql语句
    let sql = `select * from jobs where companyName like '%${req.body.params}%' or positionName like '%${req.body.params}%'`

    getInfo(sql,(num,data)=>{
        if(num == 1){
            obj.code = 1;
            obj.msg = '攻城师已阵亡，请拨打120';
        }
        if(num == 0){
            obj.data = data;
        }

        res.send(obj)
    })

}

module.exports = positionSearch;