const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;
const connection = require('../../../src/models/connection');
const productsModel = require('../../../src/models/products.model');

const { products, productIsert } = require('./mocks/products.model.mock');

describe('testes da camada model em productsModel', function () { 
  afterEach(function () {
    sinon.restore();
  });
  it('testando o rertono da função de getProducts', async function () {
    sinon.stub(connection, "execute").resolves([products]);
    const result = await productsModel.getProducts();

    expect(result).to.be.deep.equal([
  { id: 1, name: "Martelo de Thor" },
  { id: 2, name: "Traje de encolhimento" },
  { id: 3, name: "Escudo do Capitão América" },
    ]);
  });

  it('testando o rertono da função de getProductId', async function () {

    sinon.stub(connection, "execute").resolves([[products[2]]]);
    const result = await productsModel.getProductId(3);

    expect(result).to.be.deep.equal({ id: 3, name: "Escudo do Capitão América" });
  });

  it('teste ao inserir um novo item no banco', async function () {
    sinon.stub(connection, "execute").resolves([{ insertId: 999 }]);
    const result = await productsModel.insertProduct(productIsert);
    console.log(result);
    expect(result).to.be.equal( 999);
  });

  it('teste ao inserir um novo item no banco', async function () {
    sinon.stub(connection, "execute").resolves([{ insertId: 999 }]);
    const result = await productsModel.insertProduct(productIsert);
    console.log(result);
    expect(result).to.be.equal(999);
  });

});