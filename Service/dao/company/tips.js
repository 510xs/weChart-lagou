/**
 *  @排行榜
 */

const getInfo = require("../../daoImpl/getInfo");

let tips = function(req,res){
    //初始化返回对象
    let obj ={
        code:0,
        data:[],
        msg:'success'
    }

    if(!req.body.pageNo){
        obj.code = 4;
        obj.msg = 'error';
        res.send(obj);
        return;
    }

    //sql语句
    // let sql = `select * from tips order by exposure DESC limit ${req.body.pageNo*10-1},10`;
    let sql = `select * from tips order by exposure DESC LIMIT 0,${req.body.pageNo}`;
    getInfo(sql,(num,data)=>{
        if(num == 1){
            obj.code = 1;
            obj.msg = '攻城师正在骑马赶来的路上，请等待.......'
        }
        if(num == 0){
            if(data){
                obj.data = data;
            }
            if(data.length <=0){
                obj.code = 2
                obj.msg = '抱歉，没有对应的职位'
            }
        }

        res.send(obj)
    })
}

module.exports = tips;