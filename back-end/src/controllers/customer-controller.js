const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');
const repository = require('../repository/customer-repository');
const ValidationContract = require('../validators/validation-file');

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
  var customer = new Customer(req.body);
  let contract = new ValidationContract();

  // name validation
  contract.isRequired(customer.name, 'O campo nome é obrigatório.');
  contract.hasMinLen(customer.name, 3, 'O campo nome precisa ter no mínimo 3 caracteres.');
  contract.hasMaxLen(customer.name, 80, 'O campo nome é precisa ter no máximo 80 caracteres.');

  // email validation
  contract.isRequired(customer.email, 'O campo email é obrigatório.');
  contract.isEmail(customer.email, 'O campo email precisa ser um email válido.');

  // password validation
  contract.isRequired(customer.password, 'O campo password é obrigatório.');
  contract.hasMinLen(customer.password, 6, 'O campo password precisa ter no mínimo 6 caracteres.');
  contract.hasMaxLen(customer.password, 10, 'O campo password é precisa ter no máximo 10 caracteres.');

  // slug validation
  contract.isRequired(customer.slug, 'O campo slug é obrigatório.');

  // Se os dados forem inválidos
  if (!contract.isValid()) {
    res.status(400).send(contract.errors()).end();
    return;
  }

  // insere no banco e retorna
  repository.create(customer)
    .then(x => {
      res.status(200).send({
        msg: "Customer cadastrado com sucesso"
      })
    })
    .catch(e => {
      res.status(400).send({
        error: "Não foi possível cadastrar o customer",
        details: e
      });
    });
}

// put - update
exports.put = (req, res, next) => {

  let contract = new ValidationContract();
  const infos = {
    id: req.params.id,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    slug: req.body.slug
  };

  // name validation
  contract.isRequired(infos.name, 'O campo nome é obrigatório.');
  contract.hasMinLen(infos.name, 3, 'O campo nome precisa ter no mínimo 3 caracteres.');
  contract.hasMaxLen(infos.name, 80, 'O campo nome é precisa ter no máximo 80 caracteres.');

  // email validation
  contract.isRequired(infos.email, 'O campo email é obrigatório.');
  contract.isEmail(infos.email, 'O campo email precisa ser um email válido.');

  // password validation
  contract.isRequired(infos.password, 'O campo password é obrigatório.');
  contract.hasMinLen(infos.password, 6, 'O campo password precisa ter no mínimo 6 caracteres.');
  contract.hasMaxLen(infos.password, 10, 'O campo password é precisa ter no máximo 10 caracteres.');

  // slug validation
  contract.isRequired(infos.slug, 'O campo slug é obrigatório.');

  // Se os dados forem inválidos
  if (!contract.isValid()) {
    res.status(400).send(contract.errors()).end();
    return;
  }

  // atualiza e retorna
  repository.update(infos)
    .then(x => {
      res.status(200).send({
        msg: "Produto atualizado com sucesso"
      })
    })
    .catch(e => {
      res.status(400).send({
        error: "Não foi possível atualizar o produto",
        details: e
      });
    });
};

// remove - delete
exports.delete = (req, res, next) => {
  repository.remove(req.body.id)
    .then(x => {
      res.status(200).send({
        msg: "Customer removido com sucesso"
      })
    })
    .catch(e => {
      res.status(400).send({
        error: "Não foi possível remover o customer",
        details: e
      });
    });
}