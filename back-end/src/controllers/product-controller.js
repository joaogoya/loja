const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const repository = require('../repository/product-repository');

const ValidationContract = require('../validators/validation-file');

/*  METODOS GET */
// get all
exports.get = (req, res, next) => {
  repository
    .get()
    .then(data => {
      setTimeout(() => {
        res.status(200).send(data)
      }, 2000);      
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

// get by slug
exports.getBySlug = (req, res, next) => {
  repository.getBySlug(req.params.slug)
    .then(data => {
      res.status(200).send(data)
    })
    .catch(e => {
      res.status(400).send(e);
    });
}

// get by tags
exports.getByTag = (req, res, next) => {
  repository
    .getByTag(req.params.tag)
    .then(data => {
      res.status(200).send(data)
    })
    .catch(e => {
      res.status(400).send(e);
    });
}
/* FIM METODOS GET */

// post - insert
exports.post = (req, res, next) => {
  var product = new Product(req.body);
  let contract = new ValidationContract();

  // title validation
  contract.isRequired(product.title, 'O campo titulo é obrigatório.');
  contract.hasMinLen(product.title, 3, 'O campo titulo precisa ter no mínimo 3 caracteres.');
  contract.hasMaxLen(product.title, 80, 'O campo titulo é precisa ter no máximo 80 caracteres.');

  // slug validation
  contract.isRequired(product.slug, 'O campo slug é obrigatório.');
  contract.hasMinLen(product.slug, 3, 'O campo slug precisa ter no mínimo 3 caracteres.');
  contract.hasMaxLen(product.slug, 80, 'O campo slug é precisa ter no máximo 80 caracteres.');

  // description validation
  contract.isRequired(product.description, 'O campo description é obrigatório.');
  contract.hasMinLen(product.description, 10, 'O campo description precisa ter no mínimo 10 caracteres.');
  contract.hasMaxLen(product.description, 200, 'O campo description é precisa ter no máximo 200 caracteres.');

  // price validation
  contract.isRequired(product.description, 'O campo price é obrigatório.');
  contract.hasMinLen(product.price, 1, 'O campo description precisa ter no mínimo 1 caracteres.');

  // Se os dados forem inválidos
  if (!contract.isValid()) {
    res.status(400).send(contract.errors()).end();
    return;
  }

  // insere no banco e retorna
  repository.create(product)
    .then(x => {
      res.status(200).send({
        msg: "Produto cadastrado com sucesso"
      })
    })
    .catch(e => {
      res.status(400).send({
        error: "Não foi possível cadastrar o produto",
        details: e
      });
    });
}

// put - update
exports.put = (req, res, next) => {
  const product = {
    id: req.params.id,
    title: req.body.title,
    price: req.body.price,
    slug: req.body.slug,
    description: req.body.description,
    tags: req.body.tags
  };
  console.table(product);

  //const product = req.body;

  let contract = new ValidationContract();

  // title validation
  contract.isRequired(product.title, 'O campo titulo é obrigatório.');
  contract.hasMinLen(product.title, 3, 'O campo titulo precisa ter no mínimo 3 caracteres.');
  contract.hasMaxLen(product.title, 80, 'O campo titulo é precisa ter no máximo 80 caracteres.');

  // slug validation
  contract.isRequired(product.slug, 'O campo slug é obrigatório.');
  contract.hasMinLen(product.slug, 3, 'O campo slug precisa ter no mínimo 3 caracteres.');
  contract.hasMaxLen(product.slug, 80, 'O campo slug é precisa ter no máximo 80 caracteres.');

  // description validation
  contract.isRequired(product.description, 'O campo description é obrigatório.');
  contract.hasMinLen(product.description, 10, 'O campo description precisa ter no mínimo 10 caracteres.');
  contract.hasMaxLen(product.description, 200, 'O campo description é precisa ter no máximo 200 caracteres.');

  // price validation
  contract.isRequired(product.description, 'O campo price é obrigatório.');
  contract.hasMinLen(product.price, 1, 'O campo description precisa ter no mínimo 1 caracteres.');

  // Se os dados forem inválidos
  if (!contract.isValid()) {
    res.status(400).send(contract.errors()).end();
    return;
  }

  // insere no banco e retorna
  repository.update(product)
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
        msg: "Produto removido com sucesso"
      })
    })
    .catch(e => {
      res.status(400).send({
        error: "Não foi possível remover o produto",
        details: e
      });
    });
}