const boom = require('@hapi/boom');
const { config } = require('../config/config');

function checkApiKey(req, res, next){
  const  apiKey = req.headers['api'];

  if(apiKey === config.apiKey){
    next();
  }else{
    next(boom.unauthorized());
  }
}

function checkAdminRole(req, res, next){
  const  user = req.user;

  if(user.role === 'admin'){
    next();
  }else{
    next(boom.unauthorized());
  }
}

//Funcion que le dice al router que usuarios
//son los que tienen acceso
function checkRole(...roles){
  return (req, res, next) => {
    const user = req.user;

    if(roles.includes(user.role)){
      next();
    }else{
      next(boom.unauthorized());
    }
  }
}

module.exports = { checkApiKey, checkAdminRole, checkRole }
