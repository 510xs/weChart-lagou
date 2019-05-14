/**
 *      @相似职位
 */

const getInfo = require('../../daoImpl/getInfo');

let similarPositions = function(req,res){
    //初始化返回对象
    let obj ={
        code:0,
        data:[],
        msg:'success'
    }
    console.log(req.body.positionName)
    if(!req.body.positionName){
        obj.code = 3;
        obj.msg = '请刷新网络';
    }
    //sql语句
    let sql = `select * from jobs where positionName like '%${req.body.positionName}%' limit 1,3`;
    //执行操作
    getInfo(sql,(num,data)=>{
        if(num == 1){
            obj.code = 1;
            obj.msg = '攻城师正在骑马赶来的路上，请等待.......'
        }
        if(num == 0){
            if(data){
                obj.data = data;
            } else {
                obj.code = 2
                obj.msg = '没有相似职位'
            }
        }

        res.send(obj)
    })

}

module.exports = similarPositions;