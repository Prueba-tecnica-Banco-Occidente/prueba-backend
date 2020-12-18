
let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url = 'http://localhost:3070';


describe('obtener todos los productos: ', () => {
    it('debe obtener todos los productos', (done) => {
        chai.request(url)
            .get('/productos')
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
});



describe('Inserta nuevo producto: ', () => {
    it('debe insertar un nuevo producto', (done) => {
        chai.request(url)
            .post('/productos')
            .send({ nombre: "PDA ZEBRA", descripcion: 'pda para consulta de productos', categoria: 0, precio: 570000, cantidad: 8 })
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
});


describe('actualiza el producto con _id  5fdcd59b95741b16dabf23a4: ', () => {
    it('debe actualizar el producto', (done) => {
        chai.request(url)
            .put('/productos/5fdcd59b95741b16dabf23a4')
            .send({ nombre: "PDA HOLYWAY", descripcion: 'pda para consulta de productos', categoria: 0, precio: 570000, cantidad: 8 })
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
});

describe('elimina el producto con _id 5fdcd59b95741b16dabf23a4: ', () => {
    it('sdebe eliminar el producto con id 5fdcd59b95741b16dabf23a4', (done) => {
        chai.request(url)
        .del('/productos/5fdcd59b95741b16dabf23a4')
        .end(function (err, res) {
            console.log(res.body)
            expect(res).to.have.status(200);
            done();
        });
    });
});
