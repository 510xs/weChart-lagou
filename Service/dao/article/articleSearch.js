/**
 *      @搜索文章
 */

const getInfo = require("../../daoImpl/getInfo");

let articleSearch = function(req,res){
    //sql语句对象
    let sql = `select * from article where articleID like '%${req.body.articleID}%' or articleTitle like '%${req.body.articleTitle}%'`;
    //执行操作
    getInfo(sql,(num,data)=>{
        res.send(data);
    })
}

module.exports = articleSearch;