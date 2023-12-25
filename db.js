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

async function createAdminUser(data) {
  const result = await pool.query(` INSERT INTO user_details (admin_name,admin_email_id,admin_mobile_number,admin_profile_url,created_by)
  VALUES(?,?,?,?,?)`, [data.admin_name,data.admin_email_id,data.admin_mobile_number,data.admin_profile_url,data.created_by])
  console.log(result);
  return result
}

module.exports ={createAdminUser}