const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

exports.get = () =>{
    return Customer.find({});
}

exports.getById = (id) => {
    return Customer.findById(id)
}

exports.create = (customer)=> {
    return customer.save()
}

exports.update = (infos) => {
    return Customer
    .findByIdAndUpdate(infos.id, {
      $set:{
        email: infos.email,
        password: infos.password,
        slug: infos.slug,
        name: infos.name,
      }
    })
}

exports.remove = (id) => {
    return Customer.findOneAndRemove(id);
}