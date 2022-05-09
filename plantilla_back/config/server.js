const express = require('express');
const routerApi = require('../routes');
const { checkApiKey } = require('../app/middlewares/auth.handler');

const {logErrors, errorHandler, boomErrorHandler} = require('../app/middlewares/error.handler');

class Server{
  constructor(){
    this.app = express();
    this.port = 3000;
  }

  middlewares(){
    this.app.use(logErrors);
    this.app.use(boomErrorHandler);
    this.app.use(errorHandler);
  }

  routes(){
    this.app.get('/',
      checkApiKey,
      (req, res) => res.send('hello world')
    );

    routerApi(this.app);
  }

  start(){
    this.app.listen(this.port, () => {
      console.log(`run in http://localhost:${this.port}`);
    });
  }
}

module.exports = Server;
