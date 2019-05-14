/**
 *      @操作数据
 */

const DbUtile = require("../dbUtile/dbUtile");

function getInfo(sql,callback){
    let conn = new DbUtile().getConn();
    conn.query(sql,(err,res)=>{
        if(err) throw err;

        let num = 0;
        if(err){
            num = 1;
        }
        callback(num,res);
    })
}

module.exports = getInfo;