const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { config } = require('./../config/config');

const router = express.Router();
//const service = new CategoryService();

router.post('/login',
  passport.authenticate('local', {session: false}),
  async (req, res, next) => {
    try {
      //guardar el usuario
      const user = req.user;

      //crear el payload
      const payload = {
        sub: user.id,
        role: user.role
      }

      //crear el token
      const token = jwt.sign(payload, config.jwSecret);

      //devolver los datos
      res.json({
        user,
        token
      });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
