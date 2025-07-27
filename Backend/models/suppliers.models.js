const mongoose = require("mongoose");

const supplierSchema = mongoose.Schema({
    sName: {
        type: String,
    }
});

const supplierModel = mongoose.model("suppliersDetails",supplierSchema);

module.exports = supplierModel;