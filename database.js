const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config()

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,//specify the port number 
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE_NAME
}).promise()


async function insertLastUserIdInAuthTable(data, callback) {
  const insertLastUserIdInAuthTableResult = await pool.query(`INSERT INTO auth(lastUserId,user_email,user_password,user_type,created_at,updated_at,created_by)
  VALUES (?,?,?,?,?)`, callback.lastUserId, data.user_email, data.user_password, data.user_type, data.created_at, data.updated_at, data.created_by)
  return callback, insertLastUserIdInAuthTableResult
}

pool.getConnection((error, connection) => {
  if (error) {
    console.log(error, "Error in connecting with database");
  } else {
    console.log("Database connected successfully ");
  }
})

pool.on('error', (err) => {
  console.error('Database pool error:', err);
});

module.exports = { createNewUser, insertLastUserIdInAuthTable }
