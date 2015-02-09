// tisikkirlir.js - v1.1.1

String.prototype.tisikkirlir = function() {
  return this.replace(/[aeıioöuü]/gm, 'i').replace(/[AEIİOÖUÜ]/gm, 'İ');
};
