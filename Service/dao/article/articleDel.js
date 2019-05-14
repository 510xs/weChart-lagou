/**
 *  @删除文章
 */

const getInfo = require("../../daoImpl/getInfo");

let articleDel = function(req,res){
    //sql语句对象
    let sql = `delete from article where articleID='${req.body.articleID}' and articleTitle='${req.body.articleTitle}'`;
    //支持操作
    getInfo(sql,(num,data)=>{
        res.send(data);
    })
}

module.exports = articleDel;