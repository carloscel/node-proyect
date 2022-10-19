const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server{
    constructor(){
      this.app = express();
      this.userPath = '/api/users'
      this.connectDB();
      this.middlewares();
      this.routes();
    }

    async connectDB(){
      await dbConnection();
    }

    middlewares(){
      this.app.use(express.static('public'));
      this.app.use(cors())
      
      this.app.use(express.json());
    }

    routes(){
      this.app.use(this.userPath , require('../routes/user.routes'))
    }

    listen(){
      this.app.listen(process.env.PORT, () => {
        console.log(`Example app listen`)
      })
    }
}

module.exports = Server;