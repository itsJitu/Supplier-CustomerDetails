const express = require("express");

const router = express.Router();

const { addCustomer } = require("../controllers/customer.controllrs");

// router.post("./add", AddCustomer);
router.post("/add", addCustomer);
module.exports = router;
