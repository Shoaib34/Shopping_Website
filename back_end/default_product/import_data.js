// Importing required modules
const mongoose = require('mongoose'); // MongoDB ODM (Object Data Mapper)
const fs = require('fs'); // File System module for reading files

// Importing Product model from product.js
const Product = require('../models/product.js');

// Reading data from JSON file
fs.readFile('upload_product.json', 'utf8', (err, data) => {
    if (err) {
        // If there's an error reading the file, log the error
        console.error('Error reading upload_product.json:', err);
        return;
    }

    try {
        // Parsing the JSON data
        const jsonData = JSON.parse(data);

        // Inserting parsed data into MongoDB using the Product model
        Product.insertMany(jsonData)
            .then(docs => {
                // If data is inserted successfully, log the inserted documents
                console.log('Data inserted successfully:', docs);
            })
            .catch(err => {
                // If there's an error inserting data, log the error
                console.error('Error inserting data into MongoDB:', err);
            });
    } catch (err) {
        // If there's an error parsing JSON data, log the error
        console.error('Error parsing JSON data:', err);
    }
});

// Connecting to MongoDB database
mongoose.connect('mongodb://localhost:27017/myDatabase')
    .then(() => {
        // If connection is successful, log the success message
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        // If there's an error connecting to MongoDB, log the error
        console.error('Error connecting to MongoDB:', error);
    });
