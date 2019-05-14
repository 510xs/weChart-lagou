const mysql = require("mysql");

//封装连接池类
class DbUtile {
    constructor(){
        this.flag = true;
        this.pool = mysql.createPool({
            host:"127.0.0.1",
            user:'root',
            password:"root",
            database:"litem",
            port:3306
        })
    }
    getConn(){
        if(this.flag){
            this.pool.on('connection',(connection)=>{
                connection.query('SET SESSION auto_increment_increment=1');
                this.flag = false;
            });
        }
        return this.pool;
    }
}

module.exports = DbUtile;
