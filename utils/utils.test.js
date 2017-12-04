const expect = require('expect');
const utils = require('./utils');
it('should add two numbers',() => {
    var res = utils.add(33,11);

    expect(res).toBe(44,'Expected 44').toBeA('number');

});

it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
    });
});

it('should sqaure a numbers', () => {
    var res = utils.square(2);

    expect(res).toBe(4).toBeA('number')
});

it('should async sqaure a number', (done) => {
    utils.asyncSquare(2, (sum) => {
       expect(sum).toBe(4).toBeA('number');
       done();
    });
});

it('should contain', () => {
    var user = {
        age:25,
        location:'UK'
    };

    var res = utils.setName(user,'David Theobald');

    expect(res).toInclude({firstname:'David',lastName:'Theobald'}).toBeA('object')
});