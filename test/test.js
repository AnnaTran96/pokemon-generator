const expect = require('chai').expect;
const server = require('../server/server.js');

var request = require('request');

it('Server start', function(done) {
    request('http://localhost:3000' , function(error, response, body) {
        expect(body).to.equal('Hello World');
        done();
    });
});

it('Status Code', function(done) {
    request('http://localhost:3000' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});


