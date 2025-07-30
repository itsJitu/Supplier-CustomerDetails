const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({
  name: {
    type: String,
  },
  phone: {
    type: Number,
  },
  email: {
    type: String,
  },
  type: {
    type: String,
  },
  billingAddress: {
    type: String,
  },
  shippingAddress: {
    type: String,
  },
  code: {
    type: String,
  },
  paymentTerm: {
    type: String,
  },
  preferredPayment: {
    type: String,
  },
  productCategory: {
    type: String,
  },
});

const CustomerModel = mongoose.model("CustomerDetails", customerSchema);

module.exports = CustomerModel;
