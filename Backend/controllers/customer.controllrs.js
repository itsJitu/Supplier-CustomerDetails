const CustomerModel = require("../models/customer.models");

const addCustomer = async (req, res) => {
 
  try {
    const newCustomerModel = new CustomerModel(req.body);
    await newCustomerModel.save();
    res.status(201).json(newCustomerModel);
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
};

const GetCustomer = async (req,res)=>{
    try {
        const Customer = await CustomerModel.find();
        res.status(200).json( Customer);
    } catch (err) {
        res.status(500).json({error : err.message})
    }
};

module.exports = { addCustomer, GetCustomer };
