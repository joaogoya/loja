const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const app = express();
const router = express.Router();

mongoose.connect('mongodb://joaogoya:joao123@ds016718.mlab.com:16718/nodebalta', { useNewUrlParser: true });

//models
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');

// roteamento
const rotaIndex = require('./routes/index');
const rotaProducts = require('./routes/rotaProducts');
const rotaCustomer = require('./routes/rotaCustomer');
const rotaOrder = require('./routes/rotaOrder');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", rotaIndex);
app.use("/products", rotaProducts);
app.use("/customer", rotaCustomer);
app.use("/order", rotaOrder);

module.exports = app; 
