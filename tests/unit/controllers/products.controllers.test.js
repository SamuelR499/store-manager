const sinon = require('sinon');
const chai = require('chai');

const { expect } = chai;

const productService = require('../../../src/services/products.service');

const productsController = require('../../../src/controllers/products.controller');

describe('Teste de unidade de productControler', function () {
  before(() => { 
    sinon.stub(productService, 'getProductId')
      .onFirstCall().resolves({ type: 404, message: 'Product not found'})
  });

  after(() => sinon.restore());
  
  it('buscando produto com id nao existente, 404 not found', async function () {
    const res = {};
    const req = { params: { id: 999 }, body: {} };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    await productsController.getProductId(req, res);

    expect(res.status.calledWith(404)).to.be.true;
    expect(res.json.calledWith({ message: "Product not found" })).to.be.true;
  });

});