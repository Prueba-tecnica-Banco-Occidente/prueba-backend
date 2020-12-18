var express = require('express');


module.exports.default = function (app) {

  app.use(function (req, res, next) {

    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type,x-access-token,authorization,Authorization');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");


    next();
  });

  app.use('/productos', require('./api/productos/api.producto.js'));

}