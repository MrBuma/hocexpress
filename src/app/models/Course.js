const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Course = new Schema({
  name: { type: String, default: '', required: true },
  description: { type: String, min: 18 },
  image: { type: String},
  videoid:{type: String},
  level: {type: String},
  slug: { type: String, slug: "name", unique: true }
}, 
{
  timestamps: true
});

  mongoose.plugin(slug);
  Course.plugin(mongooseDelete);
module.exports = mongoose.model('Course', Course);

