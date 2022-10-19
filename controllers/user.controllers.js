const {request, response} = require('express');
const User = require('../models/user');
const bcryptjs = require('bcryptjs');
const { ValidExistEmail } = require('../helpers/db-validators');
//const {validationResult} = require('express-validator')

const usersGet = (req = request, res = response) => {
  
  const body = req.body;
    res.json({
      ok: true,
      messaje: 'api get dev',
      body 
    }) 
}

const usersPost = async (req = request, res = response) => {
  //guardo los errores
  //const errors = validationResult(req)
  //!los errores son vacios = cuando hay errores
  //if(!errors.isEmpty()){//isEmpty me devuelve un booleano(true)
    //return res.status(400).json(errors)
  //}

  //const body = req.body;
  const { name, email, password, role } = req.body;
  const user = new User({name, email, password, role});

  /*
  //esta verificando en la base de datos si existe ese correo
  const existEmail = await User.findOne({email});
  //fidOne: busque el campo email
  
  if(existEmail){
    return res.status(400).json({
      msg: "Este correo ya ha sido registardo en la base de datos"
      //este mensaje es para el front 
    })
  }
  */
  //ValidExistEmail(user)
  //bcryptjs
  const salt = bcryptjs.genSaltSync();
  user.password = bcryptjs.hashSync(password, salt);

  //save to db
  await user.save();
  
  res.json({
    ok: true,
    messaje: 'api post ',
    user
    
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
