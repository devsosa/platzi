const express = require('express');
//const req = require('express/lib/request');
//const res = require('express/lib/response');
const ProductsService = require('./../services/product.service');
const validatorHandler = require('./../middleware/validator.handler');
const {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
  queryProductSchema } = require('./../schemas/product.schema');


//Creando un Router propio
const router = express.Router();

//Creando una instancia del servicio
const service = new ProductsService();

//Cambiando a un array []
router.get('/',
  validatorHandler(queryProductSchema, 'query'),
  async (req, res, next) => {
    try{
      const products = await service.find(req.query);
      res.json(products);
    }catch(error){
      next(error);
    }

    //const { size } =  req.query;
  }
/* res.json([
  {
    nombre: 'Product 1',
    precio: 100
  },
  {
    nombre: 'Product 2',
    precio: 200
  }
]) */
);

//FILTER
router.get('/filter', (req, res) => {
  res.send('Soy un filter');
});

//RUTA con parametro
router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try{
      const { id } = req.params;
      const product = await service.findOne(id);

      res.json(product);
    }catch(error){
      next(error);
    }


    /* if(id === '999'){
      res.status(404).json({
        message : 'not found'
      });
    }else{
      res.status(200).json({
        id,
        nombre: 'Product 2',
        precio: 2000
      });
    } */
  }
);

//POST
router.post('/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res, next) => {
    try{
      const body = req.body;
      const newProduct = await service.create(body);

      res.status(201).json(newProduct);
    }catch(error){
      next(error);
    }
    /* res.status(201).json({
      message : 'created',
      data : body
    }); */
  }
);

//PATCH
router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),

  async (req, res, next) => {
    try{
      const { id } = req.params;
      const body = req.body;
      const product = await service.update(id, body);

      res.json(product);
    }catch(error){
      next(error);

      /* res.status(404).json({
        message: error.message
      }); */
    }

    /* res.json({
      message: 'update',
      data: body,
      id
    }); */
  }
);

//DELETE
router.delete('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try{
      const { id } = req.params;
      //const body = req.body;
      //const rta = service.delete(id);
      await service.delete(id);
      //res.json(rta);
      res.status(201).json({id});
    }catch(error){
      next(error)
    }

  /* res.json({
    message: 'delete',
    //data: body,
    id
  }); */
});

module.exports = router;
