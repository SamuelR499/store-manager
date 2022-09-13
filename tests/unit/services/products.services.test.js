const chai = require('chai');
const sinon = require("sinon");

const { expect } = chai;
const productsModel = require('../../../src/models/products.model');
const productsService = require('../../../src/services/products.service');

const { productsList, mockResult, productById } = require('./mocks/products.service.mock');

describe('testando camada service', function () {
  afterEach(function () {
    sinon.restore();
  });
  
  it('teste de getProducts na camada services', async function () {
    sinon.stub(productsModel, 'getProducts').resolves(productsList);

    const result = await productsService.getProducts();
    expect(result).to.be.deep.equal(mockResult);
  });

    it('teste de getProductsId na camada services', async function () {
    sinon.stub(productsModel, 'getProductId').resolves(productsList[0]);

    const result = await productsService.getProductId(1);
    expect(result).to.be.deep.equal(productById);
    });
  
    it('teste de getProductsId, ao inserir id invalido, retorn 404 na camada services', async function () {
    sinon.stub(productsModel, 'getProductId').resolves();

    const result = await productsService.getProductId(999);
    expect(result).to.be.deep.equal({type: 'PRODUCT_NOT_FOUND', message: 'Product not found'});
    });
  
    it('teste de insersão de um novo produto, teste na camada services', async function () {
    sinon.stub(productsModel, 'insertProduct').resolves(999);

    const newProduct = await productsService.creatProduct('Quinjet');
    expect(newProduct).to.be.deep.equal({type: null, message:{id:999, name: 'Quinjet'}});
    });
  
    it('teste se retorna "message": ""name" is required" ao tentar inserir um produto, sem passar o nome, na camada services', async function () {
    sinon.stub(productsModel, 'insertProduct').resolves();

    const newProduct = await productsService.creatProduct();
    expect(newProduct).to.be.deep.equal({type: 'FIELD_REQUIRED', message: '"name" is required'});
    });
      it('teste se não é possivel cadastrar um produto quando o name for menor que 5, na camada services', async function () {
    sinon.stub(productsModel, 'insertProduct').resolves();

    const newProduct = await productsService.creatProduct('car');
    expect(newProduct).to.be.deep.equal({type: 'INVALID_FIELD', message: '"name" length must be at least 5 characters long'});
  });
});