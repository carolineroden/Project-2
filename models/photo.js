const mongoose = require('mongoose');


const commentSchema = new mongoose.Schema({
  content: String,
  user: {type: mongoose.Schema.ObjectId, ref: 'User'}
});

const photoSchema = new mongoose.Schema({
  url: String,
  caption: String,
  comments: [commentSchema],
  user: {type: mongoose.Schema.ObjectId, ref: 'User'}
});



module.exports = mongoose.model('Photo', photoSchema);
