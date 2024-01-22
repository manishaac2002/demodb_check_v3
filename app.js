// import express from "express";
// import controller from "./controller/controller.js";
// const app = express()

// //routers api
// app.get('/get-admin', controller.getAdminDetailsController)

// //port connection
// const port =5002
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// })
 
// delete from tableName where id=1




const query =`delete from ${tableName} ${where} ${columnName} =${valuePlaceHolder}`