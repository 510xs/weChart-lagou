/**
 *      @所有文章
 */

const getInfo = require("../../daoImpl/getInfo");

let articleList = function(req,res){
    //sql语句对象
    let sql = `select * from article`;
    //执行操作
    getInfo(sql,(num,data)=>{
        res.send(data);
    })
}

module.exports = articleList;