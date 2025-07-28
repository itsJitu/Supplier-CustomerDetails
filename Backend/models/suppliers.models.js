const mongoose = require("mongoose");

const supplierSchema = mongoose.Schema({
    sName: {
        type: String,
    },
    address: {
        type: String,
    },
    contact: {
        type: Number,
    },
    currentStock: {
        type: Number,
    },
    stockInTransit: {
        type: Number,
    },
    availableStock: {
        type: Number,
    },
    category: {
        type: String,
    },
    unitPrice: {
        type: Number,
    },
    totalInventory: {
        type: Number,
    },
    lorem: {
        type: String,
    },
    date : {
        type: Date,
    },
    emailId: {
        type: String,
    }

});

const supplierModel = mongoose.model("suppliersDetails",supplierSchema);

module.exports = supplierModel;