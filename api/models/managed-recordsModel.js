"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var RecordSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  disposition: {
    type: String,
    required: true,
  },
  Created_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Records", RecordSchema);
