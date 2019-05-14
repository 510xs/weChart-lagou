/**
 *      @动态搜索提示
 */

const getInfo = require("../../daoImpl/getInfo");

let similar = function (req,res) {
    //初始化返回对象
    let obj ={
        code:0,
        data:[],
        msg:'success'
    }

    if(!req.body.params){
        obj.code = 2;
        obj.msg = '搜索条件不能为空';
        res.send(obj);
        return;
    }

    //sql语句
    let sql =`select * from similar where similarName like '%${req.body.params}%' limit 1,6`;

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

module.exports = similar