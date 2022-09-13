const productsList = [
  { id: 1, name: 'Martelo de Thor' },
  { id: 2, name: 'Traje de encolhimento' },
  { id: 3, name: 'Escudo do Capitão América' },
  { id: 4, name: 'Produto1' }
];

const mockResult = {
  type: null,
  message: [
    { id: 1, name: 'Martelo de Thor' },
    { id: 2, name: 'Traje de encolhimento' },
    { id: 3, name: 'Escudo do Capitão América' },
    { id: 4, name: 'Produto1' }
  ]
};

const productById = {
  "type": null,
  "message":
    {
      "id": 1,
      "name": "Martelo de Thor"
    }
};
module.exports = {
  productsList,
  mockResult,
  productById
};