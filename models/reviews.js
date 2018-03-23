const mongoose = require('mongoose');
const { Schema } = mongoose;
const rSchema = new Schema({
  rating: { type: Number, min: 1, max: 5 },
  summary: { type: String },
  productName: { type: String },
  image: { type: String },
  reviewDate: Date,
});

rSchema.methods.serialize = function() {
  return {
    id: this._id,
    rating: this.rating,
    productName: this.productName,
    image: this.image,
    summary: this.summary,
  };
};

const Review = mongoose.model('Review', rSchema);

module.exports = Review;
