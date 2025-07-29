const CustomerModel = require("../models/customer.models");

const addCustomer = async (req, res) => {
  try {
      const {
          name,
          phone,
          email,
          type,
          billingAddress,
          shippingAddress,
          code,
          paymentTerm,
          preferredPayment,
          productCategory,
      } = req.body;

      // check for required fields
      if (
          !name ||
          !phone ||
          !email ||
          !type ||
          !billingAddress ||
          !shippingAddress ||
          !code ||
          !paymentTerm ||
          !productCategory ||
          !preferredPayment
      ) {
          return res.status(400).json({ message: "Required Fields missing" });
      }

      // create and save new customer
      const newCustomer = new CustomerModel({
          name,
          phone,
          email,
          type,
          billingAddress,
          shippingAddress,
          code,
          paymentTerm,
          preferredPayment,
          productCategory,
      });

      await newCustomer.save();

      // send success response
      res.status(201).json({
          success: true,
          message: "Customer added successfully",
          data: newCustomer,
      });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
//   try {
//     const newGiftCard = new CustomerModel(req.body);
//     await newGiftCard.save();
//     res.status(201).json(newGiftCard);
//   } catch (err) {
//     res.status(400).json({ Error: err.message });
//   }
};

module.exports = { addCustomer };
