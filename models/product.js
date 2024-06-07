// Import mongoose library
const mongoose = require('mongoose');

// Define product schema using mongoose.Schema
const productSchema = new mongoose.Schema({
    // Define field for product name, which is of type String and is required
    name: { type: String, required: true },
    // Define field for product description, which is of type String (optional)
    description: { type: String },
    // Define field for product price, which is of type Number and is required
    price: { type: Number, required: true },
    // Define field for product quantity, which is of type Number and is required
    quantity: { type: Number, required: true },
    // Define field for creation timestamp, which is of type Date and has a default value of the current date and time
    createdAt: { type: Date, default: Date.now }
});

// Create product model based on the defined schema
const Product = mongoose.model('Product', productSchema);

// Export the product model to make it available for use in other files
module.exports = Product;
