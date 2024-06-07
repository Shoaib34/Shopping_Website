//importing mongoose library
const mongoose = require('mongoose');

//Defining Schema for user model
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },  // Define a field for the username, which is of type String and is required
    email: { type: String, required: true, unique: true },  // Define a field for the email, which is of type String, is required, and must be unique
    password: { type: String, required: true },  // Define a field for the password, which is of type String and is required
    createdAt: { type: Date, default: Date.now }  // Define a field for the createdAt timestamp, which is of type Date and has a default value of the current date and time
  });


//Creating user model based off Schema
const User = mongoose.model('User', userScehama);

//Now we can export the Schema to use in other files
module.exports = User;