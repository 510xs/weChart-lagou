/**
 *  @文章详情
 */

const getInfo = require("../../daoImpl/getInfo");

let articleDetail = function(req,res){
    //sql语句对象
    let sql = `select * from article where articleID='${req.body.articleID}'`;
    //执行操作
    getInfo(sql,(num,data)=>{
        res.send(data);
    })
}

module.exports = articleDetail;