const express = require("express");

const router = express.Router();

const {
    addSupplier
} = require("../controllers/suppliers.controllers");

router.post('/add', addSupplier);



module.exports = router;