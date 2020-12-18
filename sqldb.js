const mongoose = require('mongoose');


var db = {
    mongoose:mongoose,
    Mongoose: mongoose.connect('mongodb://localhost/prueba_administrador_productos')
};


module.exports = db;