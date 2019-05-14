/**
 *  @职位列表
 *  @职位列表
 */

const getInfo = require('../../daoImpl/getInfo');

let positionList = function(req,res){
    // console.log(req.query)
    //初始化返回对象
    let obj ={
        code:0,
        data:[],
        msg:'success'
    }

    if(!req.body.pageNo){

        // console.log("no");
        // console.log(req.body.pageNo,'no---no')
        // return;
    }

    let sql = `select * from jobs limit 0,${req.body.pageNo}`

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

module.exports = positionList;