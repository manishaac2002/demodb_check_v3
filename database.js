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

async function createNewUser(data) {
  const result = await pool.query(` INSERT INTO admin (user_id,admin_mobile_number,admin_profile_url,created_by)
  VALUES(?,?,?,?)`, [user_id,admin_mobile_number,admin_profile_url,created_by])
  return result
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

module.exports = createNewUser
