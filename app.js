import express from "express";

const app = express()

//routers api
app.get('/get-user', getAdminDetailsController)

//port connection
const port =5002
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})