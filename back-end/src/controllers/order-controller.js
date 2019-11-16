const mongoose = require('mongoose');
const Order = mongoose.model('Order');
const repository = require('../repository/order-repository');

const guid = require('guid');

// get all
exports.get = (req, res, next) => {
    repository
        .get()
        .then(data => {
            res.status(200).send(data)
        })
        .catch(e => {
            res.status(400).send(e);
        });
}

// get by id
exports.getById = (req, res, next) => {
    const id = req.params.id;
    repository
        .getById(id)
        .then(data => {
            res.status(200).send(data)
        })
        .catch(e => {
            res.status(400).send(e);
        });
}

// post - insert
exports.post = (req, res, next) => {
    let infos = {
        customer: req.body.customer,
        number: guid.raw().substring(0, 6),
        items: req.body.items
    };
    var order = new Order(infos);
    repository.create(order)
        .then(x => {
            res.status(200).send({
                msg: "Order cadastrado com sucesso"
            })
        })
        .catch(e => {
            res.status(400).send({
                error: "Não foi possível cadastrar o Order",
                details: e
            });
        });
}

// put - update
exports.put = (req, res, next) => {
    const infos = {
        id : req.params.id,
        customer: req.body.customer,
        items: req.body.items
    };
    repository.update(infos)
        .then(x => {
            res.status(200).send({
                msg: "Order atualizado com sucesso"
            })
        })
        .catch(e => {
            res.status(400).send({
                error: "Não foi possível atualizar o Order",
                details: e
            });
        });
};

// remove - delete
exports.delete = (req, res, next) => {
    repository.remove(req.params.id)
        .then(x => {
            res.status(200).send({
                msg: "Order removido com sucesso"
            })
        })
        .catch(e => {
            res.status(400).send({
                error: "Não foi possível remover a Order",
                details: e
            });
        });
}