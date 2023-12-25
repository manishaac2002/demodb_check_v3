const express = require('express')
const { createAdminDetailsController, getAdminDetailsController } = require('./controller')
const app = express()

app.get('/get-user', getAdminDetailsController)
app.post('/create-user', createAdminDetailsController)

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
})