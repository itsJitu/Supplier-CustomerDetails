const express = require("express");

const mongoose = require("mongoose");

// const dotenv = require("dotenv");

const app = express();

require('dotenv/config');

const PortNO = process.env.PORT_NO || 8080;
const MONGOOSE_URL = process.env.MONGOOSE_URL;

const FRONTEND_URL = process.env.FRONTEND_URL;

const cors = require('cors');
app.use(cors());
const corsOption = {
    origin: FRONTEND_URL,
    methods:["GET","POST"],
};
app.use(cors(corsOption));

app.use(express.json());

mongoose.connect(MONGOOSE_URL)
.then(() => {
    console.log("db connected");
})

.catch((error) => {
    console.log(error);
})

const supplierRouter = require('./routes/suppliers.routes');
app.use('/api/suppliers', supplierRouter);

app.listen(PortNO, () => console.log(`server is up & running at ${PortNO}`));
