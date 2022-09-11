const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const productsModel = require('../../../src/models/products.model');

const { products } = require('./mocks/products.model.mock');

// describe('testes de unidade da camada model de products', function () {
//   describe('testando o rertono das funções de getProducts e getProductId', function () {
//     beforeEach(async function() {
//       sinon.stub(connection, "execute").resolves([products]);
//     });

//   it('testando o rertono da função de getProducts', async function () {
//     const result = await productsModel.getProducts();

//     expect(result).to.be.deep.equal([
//   { id: 1, name: "Martelo de Thor" },
//   { id: 2, name: "Traje de encolhimento" },
//   { id: 3, name: "Escudo do Capitão América" },
//     ]);
//   });
    
//   it('testando o rertono da função de getProductId', async function () {
//     const result = await productsModel.getProductId(1);
//     console.log(result);
//     expect(result).to.be.deep.equal({ id: 1, name: "Martelo de Thor" });
//   });
//   });

//   afterEach(sinon.restore);
//  });

describe('testes da camada model em productsModel', () => { 
  
  it('testando o rertono da função de getProducts', async function () {
    await sinon.stub(connection, "execute").resolves([products]);
    const result = await productsModel.getProducts();

    expect(result).to.be.deep.equal([
  { id: 1, name: "Martelo de Thor" },
  { id: 2, name: "Traje de encolhimento" },
  { id: 3, name: "Escudo do Capitão América" },
    ]);
  });

  it('testando o rertono da função de getProductId', async function () {
    await sinon.stub(connection, "execute").resolves([[{ id: 3, name: "Escudo do Capitão América" }]]);
    const result = await productsModel.getProductId(3);
    expect(result).to.be.deep.equal({ id: 3, name: "Escudo do Capitão América" });
  });

  afterEach(sinon.restore);
});