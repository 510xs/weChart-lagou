/**
 *      @添加文档
 */

const getInfo = require("../../daoImpl/getInfo");

let articleSave = function(req,res){
    //sql语句对象
    let sql = `insert into article (articleTitle,articleAnthor,articleContent,time,articleType,articleImg) values(?,?,?,?,?,?)`;
    //执行操作
    getInfo(sql,(num,data)=>{
        res.send(data)
    })
}

module.exports = articleSave;