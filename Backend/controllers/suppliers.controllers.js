const supplierModel = require("../models/suppliers.models");

const addSupplier = async(req, res) => {
    await supplierModel.create(req.body);
    res.json({
        succes: true,
        message: "Dummy Supplier API"
    })
}



const suppliersControllers = {
    addSupplier
}
module.exports = suppliersControllers;