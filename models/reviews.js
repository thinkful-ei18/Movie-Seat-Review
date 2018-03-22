const mongoose = require('mongoose');
const { Schema } = mongoose;
const trSchema = new Schema({
  overallRating: { type: Number, min: 1, max: 5 },
  comfortRating: { type: Number, min: 1, max: 5 },
  legroomRating: { type: Number, min: 1, max: 5 },
  screenRating: { type: Number, min: 1, max: 5 },
  summary: { type: String },
  location: { type: String },
  reviewDate: Date,
});

trSchema.methods.serialize = function() {
  return {
    id: this._id,
    overallRating: this.overallRating,
    comfortRating: this.comfortRating,
    legroomRating: this.legroomRating,
    screenRating: this.screenRating,
    location: this.location,
    summary: this.summary,
  };
};

const TheatreReview = mongoose.model('TheatreReview', trSchema);

module.exports = TheatreReview;
