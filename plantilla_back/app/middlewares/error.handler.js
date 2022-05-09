function logErrors(err, req, res, next){
  console.error(err);
  next(err);
}

//detectar un error, con un formato
function errorHandler(err, req, res, next){
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

//manejo de errores con boom
function boomErrorHandler(err, req, res, next){
  if(err.isBoom){
    const{output} = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
}

module.exports = {logErrors, errorHandler, boomErrorHandler}
