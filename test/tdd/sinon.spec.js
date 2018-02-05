//https://www.sitepoint.com/sinon-tutorial-javascript-testing-mocks-spies-stubs/
const sinon = require('sinon');
const spy = sinon.spy();

spy('Hello','World');

console.log(spy.firstCall.args);

const user = {
    setName: function(name) {
        this.name = name;
    }
}

const setNameSpy = sinon.spy(user, 'setName');

user.setName('LEE');

console.log(setNameSpy.callCount);

setNameSpy.restore();