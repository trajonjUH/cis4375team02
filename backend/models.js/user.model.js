// user.model.js

// Import the required mongoose library
const mongoose = require('mongoose');

// Define the user schema with the necessary fields
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true }, // Define the username field
    password: { type: String, required: true }, // Define the password field
    name: { type: String, required: true }, // Define the name field
    role: { type: String, required: true, enum: ['editor', 'viewer'] }, // Add the role field with the allowed values 'editor' and 'viewer'
    // Add any other fields you need for your User model
});

// Create a User model using the defined userSchema
const User = mongoose.model('User', userSchema);

// Export the User model to be used in other modules
module.exports = User;
