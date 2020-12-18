var db = require('../../sqldb');

var Schema = db.mongoose.Schema,
    ObjectId = Schema.ObjectId;

var Producto = db.mongoose.Schema({
    nombre: String,
    descripcion: String,
    categoria: String,
    precio: Number,
    cantidad: Number
}, {
    timestamps: true
});
var ProductoModel = db.mongoose.model('productos', Producto);

module.exports = ProductoModel;