const Role = require('../models/role');
const User = require('../models/user');

const isValidRole = async (role = '') => {
	const existRole = await Role.findOne({ role });
	if (!existRole) {
		throw new Error(`El rol ${role} no existe en base de datos`);
	}
};

const ValidExistEmail = async (user) => {
	const {email} = user;
  	
	const existEmail = await User.findOne({email});
	console.log(existEmail.status)
	if(existEmail.status){
		
		throw new Error("Este correo ya ha sido registardo en la base de datos");
	}
	
}

module.exports = { isValidRole, ValidExistEmail };
