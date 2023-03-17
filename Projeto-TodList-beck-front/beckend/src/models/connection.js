const dotenv = require('dotenv')
dotenv.config()

const mysql = require('mysql2/promise')



const connection = mysql.createPool(
    {
        host:process.env.HOST,
        user: process.env.MYSQL_USER,
        password:process.env.MYSQL_PASSWORD,
        database:process.env.MYSQL_DB
    }
)/* Irá criar uma lista de conexões */


module.exports =  connection