const express = require("express");

const dotenv = require("dotenv");

const app = express();

dotenv.config();

const PortNo = process.env.PORT_NO || 8080;

app.listen(PortNo, () => console.log('server is up & running at $(portNO)'));