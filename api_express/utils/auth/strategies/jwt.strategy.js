const { Strategy, ExtractJwt } = require('passport-jwt');
const { config } = require('../../../config/config');
//const UserService = require('../../../services/user.service');
//const boom = require('@hapi/boom');
//const bcrypt = require('bcrypt');
//const service = new UserService();

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwSecret
}

const JwtStrategy = new Strategy(options, (payload, done) => {
  return done(null, payload);
});


module.exports = JwtStrategy;
