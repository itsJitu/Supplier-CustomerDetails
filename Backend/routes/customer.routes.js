const express = require("express");

const router = express.Router();

const { addCustomer, GetCustomer } = require("../controllers/customer.controllrs");



// router.post("./add", AddCustomer);
router.post("/add", addCustomer);
router.get("/", GetCustomer);
module.exports = router;
