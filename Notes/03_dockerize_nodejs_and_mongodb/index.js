const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const itemsRoute = require("./routes/itemsRoute");
const PORT = process.env.PORT;
const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
require("./db/itemDBConnect");
app.use(itemsRoute);

app.listen(PORT, () => console.log(`Server Running on ${PORT}`));
