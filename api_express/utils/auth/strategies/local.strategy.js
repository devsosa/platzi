const { Strategy } = require('passport-local');
const UserService = require('../../../services/user.service');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const service = new UserService();

const LocalStrategy = new Strategy(async (email, password, done) => {
  try{
    const user = await service.findByEmail(email);
    console.log('user: ' + user.username);
    //SI EL USUARIO NO EXISTE
    if(!user){
      done(boom.unauthorized(), false);
    }

    //SI EL PASSWORD NO ES CORRECTO
    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch){
      done(boom.unauthorized(), false);
    }
    delete user.dataValues.password;
    //SI PASA LAS VALIDACIONES
    done(null, user);
  }catch(error){
    done(error, false);
  }
});


module.exports = LocalStrategy;
