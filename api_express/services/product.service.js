const faker = require('faker');
const {Op} = require('sequelize');
const boom = require('@hapi/boom');

const {models} = require('../libs/sequelize');
//const setupModels = require('../db/models');

class ProductsService{

  constructor(){
    this.products = [];
    this.generate();
    //this.pool = pool;
    //this.pool.on('error', (err) => console.error(err));
  }

  generate(){
    const limit = 100;

    for(let i = 0; i < limit; i ++){
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean()
      });
    }
  }

  async create(data){
    const newProduct = await models.Product.create(data);

    /* const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    } */

    //this.products.push(newProduct);
    return newProduct;
  }

  async find(query){
    const options = {
      include: ['category'],
      where: {}
    };

    const {limit, offset} = query;

    if(limit && offset){
      options.limit = parseInt(limit);
      options.offset = parseInt(offset);
    }

    const {price} = query;

    if(price){
      options.where.price = price;
    }

    const {price_min, price_max} = query;

    if(price_min ){
      options.where.price = {
        [Op.gte]: price_min,
        [Op.lte]: price_max
      };
    }

    const products = await models.Product.findAll(options);
    return products;
    //const query = 'SELECT * FROM tasks';
    //const [data] = await sequelize.query(query);
    //return data;
    //return rta.rows;
    //return this.products;
  }

  async findOne(id){
    //const name = this.getTotal();
    //return this.products.find(item => item.id === id);

    const product = this.products.find(item => item.id === id);

    if(!product){
      throw boom.notFound('product not found');
    }
    if(product.isBlock){
      throw boom.conflict('Product is block');
    }
    return product;
  }

  async update(id, changes){
    //Retorna la posicion en la que esta el objeto
    const index = this.products.findIndex(item => item.id === id);

    if(index === -1){
      //throw new Error('Product not found');
      throw boom.notFound('Product not found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    };

    return this.products[index];
  }

  async delete(id){
    const index = this.products.findIndex(item => item.id === id);

    if(index === -1){
      throw boom.notFound('Product not found');
      //throw new Error('Product not found');
    }

    this.products.splice(index, 1);
    return { id };
  }
}

module.exports = ProductsService;
