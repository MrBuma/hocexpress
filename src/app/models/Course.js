const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, default: '' },
    descripton: { type: String, min: 18 },
    image: { type: String},
    createdat: { type: Date, default: Date.now },
    updatedat:{type: Date, default: Date.now}
  });

module.exports = mongoose.model('Course', Course);

