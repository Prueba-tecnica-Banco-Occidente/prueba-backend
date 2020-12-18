var db = require('../../sqldb.js');
var ProductoModel = require('../../models/productos/model.producto');

module.exports.index = function (req, res) {
    ProductoModel.find().sort({}).exec(function (err, productos) {
        if (err) {
            return res.status(500).send({
                status: 'error',
                message: 'Error al realizar la consulta'
            });
        }
        if (!productos) {
            return res.status(404).send({
                status: 'error',
                message: 'No se encontraron productos'
            });
        }
        return res.status(200).send({
            status: 'success',
            productos
        });
    });
}


module.exports.show = function (req, res) {
    ProductoModel.findOne({ _id: req.params.id }, function (err, producto) {
        if (err) {
            return res.status(500).send({
                status: 'error',
                message: 'Error al realizar la consulta'
            });
        }
        if (!producto) {
            return res.status(404).send({
                status: 'error',
                message: 'No se encontro el producto'
            });
        }
        return res.status(200).send({
            status: 'success',
            producto
        });
    });
}

module.exports.create = function (req, res) {
    //Crear objeto producto
    var producto = new ProductoModel();
    //Recoger parametros peticion
    var params = req.body;
    //Asignar valores al objeto de producto
    producto.nombre  = params.nombre;
    producto.descripcion  = params.descripcion;
    producto.categoria  = params.categoria;
    producto.precio  = params.precio;
    producto.cantidad  = params.cantidad;
    producto.save((err, productoStored) => {
        if (err) {
            res.status(500).send({ message: 'Error al guardar producto' });
        } else {
            if (!productoStored) {
                res.status(404).send({ message: 'No se ha registrado el producto' });
            } else {
                res.status(200).send({ producto: productoStored });
            }
        }
    });
}


module.exports.update = function (req, res) {

    // Recoger el id del grupo de la url
    var productoId = req.params.id;
    // Recoger los datos que llegan desde post
    var params = req.body;
        // Montar un json con los datos modificables
        var actualizar = {
            'nombre': params.nombre,
            'descripcion': params.descripcion,
            'categoria': params.categoria,
            'precio': params.precio,
            'cantidad': params.cantidad
        }
        ProductoModel.findOneAndUpdate({ _id: productoId }, actualizar, { new: true }, (err, productoUpdated) => {
            if (err) {
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al actualizar producto'
                });
            }
            if (!productoUpdated) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No se ha actualizado el producto'
                });
            }
            // Devolver respuesta            
            return res.status(200).send({
                status: 'success',
                producto: productoUpdated
            });
        });
}

module.exports.destroy = function (req, res) {
    ProductoModel.deleteOne({ _id: req.params.id }, function (err, producto) {
        if (err) {
            return res.status(500).send({
                status: 'error',
                message: 'Error al eliminar el producto'
            });
        }
        if (!producto) {
            return res.status(404).send({
                status: 'error',
                message: 'No se encontro el producto a eliminar'
            });
        }
        return res.status(200).send({
            status: 'success',
            producto
        });
    });
}