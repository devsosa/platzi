const Server = require('./config/server');
const app = new Server();

app.start();
app.routes();
app.middlewares();
