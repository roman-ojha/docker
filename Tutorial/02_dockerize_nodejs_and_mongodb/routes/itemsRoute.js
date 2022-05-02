const express = require("express");
const router = express.Router();
const itemController = require("../controllers/item.controller");

// Home Page
router.get("/", itemController.home);

// Add Item Route
router.post("/items/add", itemController.addItems);

// Get Item Route
router.get("/items/get", itemController.getItems);

module.exports = router;
