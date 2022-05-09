const express = require('express');
//const faker = require('faker');
const routerApi = require('./routes');
const { checkApiKey } = require('./middleware/auth.handler');

//importando el middleware error
const {logErrors, errorHandler, boomErrorHandler, ormErrorHandler} = require('./middleware/error.handler');

const app = express();

const port = 3000;

require('./utils/auth');

//MIDDLE WORD
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/nueva-ruta', checkApiKey, (req, res) => res.send('Soy una nueva ruta'));

routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
