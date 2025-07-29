const supplierModel = require("../models/suppliers.models");



const addSupplier = async(req, res) => {
    try {
    const { sName, address, contact, currentStock, stockInTransit, availableStock, category, unitPrice, totalInventory, lorem, date, emailId } = req.body;
    if(!sName || !address || !contact || !currentStock || !stockInTransit || !availableStock || !category || !unitPrice || !totalInventory || !lorem || !date || !emailId) {
        return res.status(400).json({
            message: "All fileds are required"
        });
    }
    
   const data = new supplierModel({ sName, address, contact, currentStock, stockInTransit, availableStock, category, unitPrice, totalInventory, lorem, date, emailId});
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
const GetSupplier = async (req,res)=>{
    try {
        const Supplier = await supplierModel.find();
        res.status(200).json( Supplier);
    } catch (err) {
        res.status(500).json({error : err.message})
    }
};

module.exports = { addSupplier ,GetSupplier};