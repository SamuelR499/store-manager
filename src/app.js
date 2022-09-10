const express = require('express');
const productsRoutes = require('./routers/products.router');

const app = express();

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo server.js para executar sua aplicação
app.use(express.json());
app.use('/products', productsRoutes);

module.exports = app;