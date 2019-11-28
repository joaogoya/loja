const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = () =>{
    return Product.find({});
}

exports.getById = (id) => {
    return Product.findById(id)
}

exports.getBySlug = (slug) => {
    return Product.findOne({slug});
}

exports.getByTag = (tag) => {
    return Product.find({tags: tag});
}

exports.create = (product)=> {
    return product.save()
}

exports.update = (infos) => {
    return Product
    .findByIdAndUpdate(infos.id, {
      $set:{
        title: infos.title,
        price: infos.price,
        slug: infos.slug,
        description: infos.description,
        tags: infos.tags
      }
    })
}

exports.remove = (id) => {
    console.log(id);
    return Product.findOneAndRemove({'_id': id});
}