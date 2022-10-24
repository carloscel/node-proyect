const {request, response} = require('express');
const User = require('../models/user');
const bcryptjs = require('bcryptjs');
//const {validationResult} = require('express-validator')

/*
const usersGet = (req = request, res = response) => {
  //Busquedas para traer todo lo que hay en la base datos.

  const {name} = req.params
  
  User.find({name : {"$regex": name, "$options": "i"}}, (err, users) =>  {
    res.json({
      
      users 
    }) 
  })
}
*/

const usersGet = (req = request, res = response) => {
  //Busquedas para traer todo lo que hay en la base datos.

  const {id} = req.params
  User.find(id ? {_id:id} : {}, (err, users) =>  {
    res.json({
      
      users 
    }) 
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

const usersPut = async (req = request, res = response) => {

  const {id} = req.params;
  const {password, email, ...rest} = req.body;

  if(password){
    const salt = bcryptjs.genSaltSync();
    rest.password = bcryptjs.hashSync(password, salt);
  }

  const user = await User.findByIdAndUpdate(id, rest)

  res.json({
    ok: true,
    messaje: 'api put',
    user
  }) 
}

const usersDelete = async (req = request, res = response) => {

  const {id} = req.params;
  //Delete User
  //const userDelete = await User.findByIdAndDelete(id); 

  //change status
  const userDelete = await User.findByIdAndUpdate(id, {status: false})

  res.json({
    
    messaje: 'se eliminó el usuario',
    userDelete
    
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
