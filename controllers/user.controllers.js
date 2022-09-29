const {request, response} = require('express');

const usersGet = (req = request, res = response) => {
  
  const body = req.body;
    res.json({
      ok: true,
      messaje: 'api get',
      body 
    }) 
}

const usersPost = (req = request, res = response) => {

  const body = req.body;
  console.log(req.body)
  res.json({
    ok: true,
    messaje: 'api post',
    body
    
  }) 
}

const usersPut = (req = request, res = response) => {
  res.json({
    ok: true,
    messaje: 'api put',
    
  }) 
}

const usersDelete = (req = request, res = response) => {
  res.json({
    ok: true,
    messaje: 'api delete',
    
  }) 
}

const usersPatch = (req = request, res = response) => {
  res.json({
    ok: true,
    messaje: 'api patch',
    
  }) 
}

module.exports = {
  usersGet, 
  usersPost, 
  usersPut, 
  usersDelete,
  usersPatch
}
