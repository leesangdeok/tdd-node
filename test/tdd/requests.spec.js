// tests/main/cart-summary-test.js
const chai = require('chai');
const expect = chai.expect; // we are using the "expect" style of Chai
const Requests = require('./../../main/tdd/main');

describe('requests', function() {
  it('getValue() should return 0 if no items are passed in', function() {
    const requests = new Requests([]);
    expect(requests.getValue()).to.equal(0);
  });
});