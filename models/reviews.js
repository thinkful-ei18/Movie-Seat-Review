'use strict';
const mongoose = require('mongoose');

const trSchema = new mongoose.Schema({
  overallRating: { type: Number, min: 1, max: 5 },
  comfortRating: { type: Number, min: 1, max: 5 },
  legroomRating: { type: Number, min: 1, max: 5 },
  screenRating: { type: Number, min: 1, max: 5 },
  summary: { type: String },
});

trSchema.methods.serialize = function() {
  return {
    id: this._id,
    overallRating: this.overallRating,
    comfortRating: this.comfortRating,
    legroomRating: this.legroomRating,
    screenRating: this.screenRating,
    summary: this.summary,
  };
};

const TheatreReview = mongoose.model('TheatreReview', trSchema);

module.exports = TheatreReview;
