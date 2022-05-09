const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
//const { use } = require('express/lib/application');

const {models} = require('../libs/sequelize');

class UserService{

  constructor(){}

  async create(data){
    const hash = await bcrypt.hash(data.password, 10);
    const newUser = await models.User.create({
      ...data,
      password: hash
    });
    delete newUser.dataValues.password;
    return newUser;
    //return data;
  }

  async find(){
    const rta = await models.User.findAll({
      include: ['customer']
    });
    return rta;
    //const client = await getConnection();
    //const rta = await client.query('SELECT * FROM tasks');
    //return rta.rows;
  }

  async findByEmail(email){
    const rta = await models.User.findOne({
      where: { email }
    });
    return rta;
  }

  async findOne(id){
    const user = await models.User.findByPk(id);
    if(!user){
      throw boom.notFound('user not found');
    }
    return user;
  }

  async update(id, changes){
    const user = await this.findOne(id);
    const rta = await user.update(changes);

    return rta;
    //return {id, changes};
  }

  async delete(id){
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }
}

module.exports = UserService;
