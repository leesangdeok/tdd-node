// tests/main/cart-summary-test.js
const chai = require('chai');
const expect = chai.expect; // we are using the "expect" style of Chai
const Crawling = require('./../../main/tdd/crawling');

describe('Crawling', function() {
  it('getValue() should return 0 if no items are passed in', function() {
    const crawling = new Crawling([]);
    expect(crawling.getValue()).to.equal(0);
  });
});