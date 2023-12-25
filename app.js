const express = require('express')
const createNewUser = require('./database')
const app = express()

app.get('/get-user',  (req, res) =>{
  res.send('Hello World')
})
app.post('/create-user',  async(req, res) =>{
  const data = request.body
  const userDetailsFromDb = await createNewUser(data)
  response.send('This is bio data')
})

app.listen(3000,()=>{
  console.log(`Server is running on port 3000`);
})