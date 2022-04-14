const { ValidationError } = require('sequelize');

function logErrors(err, req, res, next){
    console.error(err);

    next(err);
}

//Detectar un error y crear un formato para devolverlo
function errorHandler(err, req, res, next){

    res.status(500).json({
        message: err.message,
        stack: err.stack
    });

    //next(err);
}

//Devolviendo errores con formato boom
function boomErrorHandler(err, req, res, next){
  /* res.status(500).json({
      message: err.message,
      stack: err.stack
  }); */

  if(err.isBoom){
    const {output} = err;

    //status code dinamico
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
}

function ormErrorHandler(err, req, res, next){
  if(err instanceof ValidationError){
    res.status(409).json({
      statusCode: 409,
      message: err.name,
      errors: err.errors
    });
  }

  next(err);
}

module.exports = {logErrors, errorHandler, boomErrorHandler, ormErrorHandler}
