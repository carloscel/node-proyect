const {Schema, model} = require('mongoose');

const UserSchema = Schema ({
    name: {
		type: String,
		required: [true, 'EL nombre es obligatorio'],
	},

	email: {
		type: String,
		required: [true, 'El correo es obligatorio'],
		unique: true,
	},

	password: {
		type: String,
		required: [true, 'EL password es obligatorio'],
	},

	image: {
		type: String,
	},

	role: {
		type: String,
		required: true,
		enum: ['USER_ROLE', 'ADMIN_ROLE'],
	},

	status: {
		type: Boolean,
		default: true,
	},

    google: {
		type: Boolean,
		default: false,
	},

})

//solo voy a devolver al front los campos necesarios
UserSchema.methods.toJSON = function () {
	const { __v, password, ...user } = this.toObject();
	return user;
};

module.exports = model('User', UserSchema);

    
//Deden entender diferencia entre coleccion y documento.
//Coleccion es lo mas grande y documento es lo que se graba en las colecciones.
//Documento son objetos