const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose
  .connect(
    "mongodb://mongo:27017/docker-node-mongo",
    // to connect to mongoDB we will not use localhost rather we will sue 'mongo' because 'mongo' will going to be the name of our service that's going to be our mongo container
    // so 'mongo' name should be similar as services name
    // NOTE: while running locally on machine without docker container the 'mongo' is not working right now so it looks like we have to put 'localhost for that reason'
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const Item = require("./models/Item");

app.get("/", (req, res) => {
  // we will this route to get the item from the database
  Item.find()
    .then((items) => res.render("index", { items }))
    .catch((err) => res.status(404).json({ msg: "No items found" }));
});

app.post("/item/add", (req, res) => {
  // we will use this route to add the item in the database
  const newItem = new Item({
    name: req.body.name,
  });

  newItem.save().then((item) => res.redirect("/"));
});

const port = 3000;

app.listen(port, () => console.log("Server running..."));
