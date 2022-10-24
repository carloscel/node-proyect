const Role = require('../models/role');
const User = require('../models/user');

const isValidRole = async (role = '') => {
	const existRole = await Role.findOne({ role });
	if (!existRole) {
		throw new Error(`El rol ${role} no existe en base de datos`);
	}
};

const ValidExistEmail = async (email = '') => {
	  	
	const existEmail = await User.findOne({email});
	
	if(existEmail){
		throw new Error("Este correo ya ha sido registardo en la base de datos");
	}
	
}

const isValidUserById = async (id = '') => {
	const existId = await User.findById(id);
	
	if(!existId){
		throw new Error("El Id no ha sido registardo en la base de datos");
	}
}

module.exports = { isValidRole, ValidExistEmail, isValidUserById };
