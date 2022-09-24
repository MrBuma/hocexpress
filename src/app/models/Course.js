const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Course = new Schema({
    name: { type: String, default: '', required: true },
    description: { type: String, min: 18 },
    image: { type: String},
    videoid:{type: String},
    levle: {type: String},
    slug: { type: String, slug: "name", unique: true }
  }, 
  {
    timestamps: true
  });

module.exports = mongoose.model('Course', Course);

