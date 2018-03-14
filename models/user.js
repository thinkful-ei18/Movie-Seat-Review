'use strict';
const mongoose = require('mongoose');
const { Schema } = mongoose; //destructure Schema

const userSchema = new Schema({
  googleId: String,
});

module.exports = mongoose.model('Users', userSchema);
