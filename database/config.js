const mongoose = require('mongoose');

const dbConnection = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_CONNECTION)
        console.log('Database connection successful')

    }catch(error){
        throw new Error('Error database connecction');
    }
};

module.exports = {dbConnection}