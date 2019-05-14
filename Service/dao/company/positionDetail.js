/**
 *     @职位详情
 */

const getInfo = require('../../daoImpl/getInfo');

let positionDetail = function(req,res){
    //初始化返回对象
    let obj ={
        code:0,
        data:[],
        msg:'success'
    }
console.log(req.body)
    if(!req.body.positionID){
        obj.code = 2;
        obj.msg = '企业编号不能为空';
    }


    //sql语句
    let sql = `select DISTINCT jobs.*, enterprise.* from jobs,enterprise
where jobs.companyID = enterprise.companyID and jobs.positionID = '${req.body.positionID}'  and jobs.jobsID= ${req.body.jobsID}`;

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

module.exports = positionDetail;