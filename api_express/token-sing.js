const jwt = require('jsonwebtoken');

//para enciptar el header y payload
//debe ir en una variable de ambiente
const secret = 'myCat';

//Lo que se va encriptar dentro del token
//no se debe incluir informacion sensible
const payload = {
  sub: 1,
  role: 'customer'
}

function signToken(payload, secret){
  return jwt.sign(payload, secret);
}

const token = signToken(payload, secret);
//el unico que puede verificar si esto es correcto es el backend
console.log(token);

