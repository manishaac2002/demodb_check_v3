const { createAdminUser } = require("./db")

const getAdminDetailsController = (request, response) => {
  response.send('Hello World')
}

const createAdminDetailsController = async (request, response) => {
  const data = request.body
  console.log(data);
  const userDetailsFromDb = await createAdminUser(data)
  response.send(userDetailsFromDb)
  console.log('This is bio data');
}

module.exports = { getAdminDetailsController, createAdminDetailsController }