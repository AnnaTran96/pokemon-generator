const expect = require('chai').expect;
const server = require('../server/server.js');

var request = require('request');

it('Server start', function(done) {
    request('http://localhost:3000' , function(error, response, body) {
        expect(body).to.equal('Hello Pokemon Fans!');
        done();
    });
});

it('Status Code', function(done) {
    request('http://localhost:3000' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it('Get quotes', function(done) {
    request('http://localhost:3000/pokemon', function(error, response, body) {
        expect(body).to.be.a('string') // it is an array???
        done();
    })
})
