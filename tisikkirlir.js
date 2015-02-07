// tisikkirlir.js - v1.0.0

String.prototype.tisikkirlir = function() {
  return this.replace(/[aeıioöuü]/gm, 'i').replace(/[AEIİOÖUÜ]/gm, 'İ');
};
