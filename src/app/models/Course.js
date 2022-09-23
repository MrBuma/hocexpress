const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Course = new Schema({
    name: { type: String, default: '', required: true },
    descripton: { type: String, min: 18 },
    image: { type: String},
    videoid:{type: String},
    levle: {type: String},
    slug: { type: String, slug: "name", unique: true }
  }, 
  {
    timestamps: true
  });

module.exports = mongoose.model('Course', Course);

