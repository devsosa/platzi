const boom = require('@hapi/boom');

class UsersService{

  constructor(){
    this.users = [];
  }

  async create(){

  }

  async find(){

  }

  async findOne(){

    /* if(!product){
      throw boom.notFound('User not found');
    }
    return product; */
  }

  async update(){
    //throw boom.notFound('User not found');
  }

  async delete(){

  }
}

module.exports = UsersService;
