const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);

const leaderSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      default: false,
    },
    abbr: {
      type: String,
      label: '',
    },
    featured: {
      type: Boolean,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Leader = mongoose.model('Leader', leaderSchema);

module.exports = Leader;
