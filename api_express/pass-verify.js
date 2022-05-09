const bcrypt = require('bcrypt');

async function verifyPass(){
  const myPass = 'admin123';
  const hash = '$2b$10$v2nZqga8ZgUETSXeIL3rZOYOJtyjy00yqDu/0bIBbk4ZOiJloBFdC';
  const isMatch = await bcrypt.compare(myPass, hash);

  console.log(isMatch);
}

verifyPass();
