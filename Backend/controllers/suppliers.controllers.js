const supplierModel = require("../models/suppliers.models");


const addSupplier = async(req, res) => {
    try {
    const { sName, address } = req.body;
    if(!sName || !address) {
        return res.status(400).json({
            message: "All fileds are required"
        });
    }
    
   const data = new supplierModel({ sName, address });
   await data.save();

    res.status(201).json({
        succes: true,
        message: "Supplier ADDED"
    });
}

catch(error) {
    res.status(500).json({
        error: error.message
    });
}
};

module.exports = { addSupplier };