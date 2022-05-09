const bcrypt = require('bcrypt');


async function verifyPass(){

  const myPass = 'admin 123';
  const hash = '$2b$10$DBwkVeD9nJOKfIXwk1gk5OMrUesngOwKGzth8eNy46TllvXZlyRI6'
  const isMatch = await bcrypt.compare(myPass, hash);

  console.log(isMatch);
}

verifyPass();

