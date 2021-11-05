/* eslint-disable sonarjs/no-duplicate-string */
const chai = require('chai');

const { expect } = chai;
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');
const server = require('../index');

chai.use(chaiHttp);

const DBServer = new MongoMemoryServer();

before(async function () {
  const URLMock = await DBServer.getUri();
  const connectionMock = await MongoClient.connect(URLMock,
  { useNewUrlParser: true, useUnifiedTopology: true });

   sinon.stub(MongoClient, 'connect')
  .resolves(connectionMock);
});

after(async function () {
  MongoClient.connect.restore();
// await DBServer.stop();
}); 

describe('POST /users', function () {
  describe('quando é criado com sucesso', function () {
    let response = {};

    before(async function () {
      response = await chai.request(server)
      .post('/users')
      .send({
        name: 'Leonardo',
        lastname: 'Funa',
        email: 'funa@gmail.com',
        password: 'senhasecreta',
      });
    });
    it('retorna um objeto', function () {
      expect(response.body).to.be.an('object');
    });
    it('possui o status 201', function () {
      expect(response).to.have.status(201);
    });
    it('possui uma chave id', function () {
      expect(response.body).to.haveOwnProperty('id');
    });
  });
  describe('quando não é informado o nome', function () {
    let response = {};

    before(async function () {
      response = await chai.request(server)
      .post('/users')
      .send({
        name: '',
        lastname: 'Funa',
        email: 'funa@gmail.com',
        password: 'senhasecreta',
      });
    });
    it('retorna um objeto', function () {
      expect(response.body).to.be.an('object');
    });
    it('possui o status 200', function () {
      expect(response).to.have.status(200);
    });
    it('possui uma chave error com valor 400', function () {
      expect(response.body).to.haveOwnProperty('error').that.to.be.equal(400);
    });
  });
  describe('quando o email já possui cadastro', function () {
    let response = {};

    before(async function () {
      await chai.request(server)
      .post('/users')
      .send({
        name: 'Leo',
        lastname: 'Funa',
        email: 'funa@gmail.com',
        password: 'senhasecreta',
      });
      response = await chai.request(server)
      .post('/users')
      .send({
        name: 'Funa',
        lastname: 'Funabashi',
        email: 'funa@gmail.com',
        password: 'outrasenha',
      });
    });
    it('retorna um objeto', function () {
      console.log(response.body);
      expect(response.body).to.be.an('object');
    });
    it('retorna o status 200', function () {
      expect(response).to.have.status(200);
    });
    it('retorna uma chave error com valor 401', function () {
      expect(response.body).to.haveOwnProperty('error').that.is.equal(401);
    });
  });
});
