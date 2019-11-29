const mongoose = require('mongoose');
const Order = mongoose.model('Order');

exports.get = () =>{
    return Order.find({})
        .populate('customer')
        .populate('items.product');
}

exports.getById = (id) => {
    return Order.findById(id)
}

exports.create = (order)=> {
    return order.save()
}

exports.update = (infos) => {
    return Order
    .findByIdAndUpdate(infos.id, {
      $set:{
        customer: infos.customer,
        items: infos.items
      }
    })
}

exports.remove = (id) => {
    return Order.findOneAndRemove({'_id': id});
}