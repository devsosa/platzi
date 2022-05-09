const jwt = require('jsonwebtoken');

const secret = 'myCat';


const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY1MTQ2MDEyMX0.jCK6fqciLpmiyC7W5b2U59ccK4vk1xM9qNx8lnh2Cy0';

function verifyToken(token, secret){
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload);
