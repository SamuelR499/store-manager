const express = require('express');
const productsRouter = require('./routers/products.router');
const salesRouter = require('./routers/sales.router');

const app = express();

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo server.js para executar sua aplicação
app.use(express.json());
app.use('/products', productsRouter);
app.use('/sales', salesRouter);

module.exports = app;