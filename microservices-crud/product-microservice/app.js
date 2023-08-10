// product-microservice/app.js
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const productController = require("./controllers/productController");

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/products", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.get("/products", productController.getAllProducts);
app.get("/products/:id", productController.getProductById);
app.post("/products", productController.createProduct);
app.put("/products/:id", productController.updateProduct);
app.delete("/products/:id", productController.deleteProduct);

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Product microservice listening on port ${port}`);
});
