import express from "express";
import controllers from "./controller/controller.js";

const app = express()

//routers api
app.get('/get-admin-details', controllers.getAdminDetailsController)
app.post('/create-new-admin',controllers.createNewAdmin)

//port connection
const port = 5002
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})





