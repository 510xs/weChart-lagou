/**
 *  @搜索职位
 */

const getInfo = require("../../daoImpl/getInfo");

let positionSearch = function(req,res) {
    console.log(res.query,res.body)
    let obj ={
        code:0,
        data:[],
        msg:'success'
    }
    if((!req.body.params) || (!req.body.pageNo)){
        obj.code = 3;
        obj.msg = '请刷新网络';
    }
    //sql语句
    let sql = `select * from jobs where positionName like '%${req.body.params}%' or companyName like '%${req.body.params}%' limit ${req.body.pageNo},15`;
    //执行操作
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

module.exports = positionSearch;