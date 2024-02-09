
//get admin details
const getAdminDetailsController = (request, response) => {
  response.send('Hello World')
}

//crete new admin
const createNewAdmin =(request,response)=>{
  response.send('this is mes from controller')
}

export default 
{ getAdminDetailsController,createNewAdmin }