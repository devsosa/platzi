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

module.exports = {logErrors, errorHandler}
