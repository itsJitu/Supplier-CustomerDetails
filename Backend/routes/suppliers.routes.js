const express = require("express");

const router = express.Router();

const {
    addSupplier,
    GetSupplier
} = require("../controllers/suppliers.controllers");

router.post('/add', addSupplier);
router.get("/",GetSupplier)


module.exports = router;