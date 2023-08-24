const Item = require("../models/Item");

module.exports = {
  home: (req, res) => {
    // we will this route to get the item from the database
    Item.find()
      .then((items) => res.render("index", { items }))
      .catch((err) => res.status(404).json({ msg: "No items found" }));
  },
  getItems: (req, res) => {
    Item.find()
      .then((items) => res.json({ msg: "This is Message", items }))
      .catch((err) => res.status(404).json({ msg: "NO items found" }));
  },
  addItems: (req, res) => {
    // we will use this route to add the item in the database
    const newItem = new Item({
      name: req.body.name,
    });
    newItem.save().then((item) => res.redirect("/"));
  },
};
