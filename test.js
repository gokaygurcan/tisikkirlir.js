// tisikkirlir.js - v1.1.0

var tisikkirlir = require('./tisikkirlir');
var is = require('is_js');

var t = "teşekkürler superman"; // test string

describe('tisikkirlir.js', function () {

  // type check
  it('Type ', function (done) {
    if ( is.string(t) && is.string(t.tisikkirlir()) ) {
      done();
    }
    else {
      throw new Error('Type');
    }
  });

  // equality check
  it('Equality ', function (done) {
    if ( is.equal('tişikkirlir sipirmin', t.tisikkirlir()) ) {
      done();
    }
    else {
      throw new Error('Equality');
    }
  });

  // length check
  it('Length ', function (done) {
    if ( is.equal(t.length, t.tisikkirlir().length) ) {
      done();
    }
    else {
      throw new Error('Length');
    }
  });

});
