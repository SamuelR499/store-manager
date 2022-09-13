const sinon = require('sinon');
const chai = require('chai');

const { expect } = chai;

const productService = require('../../../src/services/products.service');
const productsController = require('../../../src/controllers/products.controller');

const { allProducts, productById, createdSuccess } = require('./mocks/products.controller.mock');
describe('Teste de unidade de productControler', function () {
  afterEach(function () {
    sinon.restore();
  });
  it('teste do retorno, ao buscar todos produtos de /products', async function () {
    sinon.stub(productService, 'getProducts').resolves(allProducts);
    const res = {};
    const req = {};
    
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    await productsController.getProducts(req, res);

    expect(res.status.calledWith(200)).to.be.true;
    expect(res.json.calledWith(allProducts.message)).to.be.true;
  });

    it('teste do retorno, ao buscar um produto pelo id na rota /products/:id', async function () {
    sinon.stub(productService, 'getProductId').resolves(productById);
    const res = {};
    const req = {params: {id: 1}};
    
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    await productsController.getProductId(req, res);

    expect(res.status.calledWith(200)).to.be.true;
    expect(res.json.calledWith(productById.message)).to.be.true;
    });

    it('teste do retorno, ao buscar um produto pelo id na rota /products/:id', async function () {
    sinon.stub(productService, 'getProductId').resolves({ type: 'PRODUCT_NOT_FOUND', message: 'Product not found' });
    const res = {};
    const req = {params: {id: 999}};
    
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    await productsController.getProductId(req, res);

    expect(res.status.calledWith(404)).to.be.true;
    expect(res.json.calledWith({ message: 'Product not found' })).to.be.true;
    });
  
  it('teste se é possivel cadastrar um produto corretamente', async function () { 
    sinon.stub(productService, 'creatProduct').resolves(createdSuccess);
    const req = { body: { name: 'Luva de pedreiro' } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productsController.creatProduct(req, res);
    console.log(await productsController.creatProduct(req, res));
    expect(res.status.calledWith(201)).to.be.true;
    expect(res.json.calledWith( createdSuccess.message )).to.be.true;
  });

  it('teste se não é possivel cadastrar um produto com name invalido', async function () { 
    sinon.stub(productService, 'creatProduct').resolves({type: 'FIELD_REQUIRED', message: '"name" is required'});
    const req = { body: {} };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productsController.creatProduct(req, res);

    expect(res.status.calledWith(400)).to.be.true;
    expect(res.json.calledWith({ message: '"name" is required' })).to.be.true;
  });
  
});