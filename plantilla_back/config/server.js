const express = require('express');
const routerApi = require('../routes');

const {logErrors, errorHandler} = require('../app/middlewares/error.handler');

class Server{
  constructor(){
    this.app = express();
    this.port = process.env.PORT || 8080;
  }

  middlewares(){
    this.app.use(logErrors);
    this.app.use(errorHandler);
  }

  routes(){
    this.app.get('/', (req, res) => res.send('hello world'));
    routerApi(this.app);
  }

  start(){
    this.app.listen(this.port, () => {
      console.log(`run in http://localhost:${this.port}`);
    });
  }
}

module.exports = Server;
