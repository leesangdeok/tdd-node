// tests/main/cart-summary-test.js
const Main = require('./../../main/tdd/main');
const User = require('./../../main/tdd/User');
const server = require('./../../main/app');

const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect, 
assert = chai.assert,
should = chai.should()
;

chai.use(chaiHttp);

let foo = 'bar'
, beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

describe('Chai Assert/Expect/Should', () => {
  it('Chai Assert', () => {
    assert.typeOf(foo, 'string'); 
    assert.typeOf(foo, 'string', 'foo is a string');
    assert.equal(foo, 'bar', 'foo equal `bar`');
    assert.lengthOf(foo, 3, 'foo`s value has a length of 3');
    assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea');
  });
  it('Chai Expect', () => {
    expect(foo).to.be.a('string');
    expect(foo).to.equal('bar');
    expect(foo).to.have.lengthOf(3);
    expect(beverages).to.have.property('tea').with.lengthOf(3);
  });
  
  it('should export a function', () => {
    expect(User.up).to.be.a('function');
  });
  it('should return a Promise', () => {
    const usersUpResult = User.up();
    expect(usersUpResult.then).to.be.a('Function');
    expect(usersUpResult.catch).to.be.a('Function');
  });
  it('getValue() should return 0 if no items are passed in', () => {
    const main = new Main([]);
    expect(main.getValue()).to.equal(0);
  });
  
  it('Chai Should', () => {
    foo.should.be.a('string');
    foo.should.equal('bar');
    foo.should.have.lengthOf(3);
    beverages.should.have.property('tea').with.lengthOf(3);
  });  
});

describe('Chai-http', () => {
  it('api test', (done) => {
    chai.request(server)
      .get('/api')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});