const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const User = require('../models/user');
const Review = require('../models/reviews');
module.exports = app => {
  app.post('/api/reviews', requireLogin, (req, res, next) => {
    const userId = req.user._id;
    const {
      location,
      overallRating,
      legroomRating,
      comfortRating,
      screenRating,
      summary,
    } = req.body;

    const newReview = {
      location,
      overallRating,
      legroomRating,
      comfortRating,
      screenRating,
      summary,
      userId,
    };

    Review.create(newReview)
      .then(result => {
        res
          .location(`${req.originalUrl}/${result.id}`)
          .status(201)
          .json(result);
      })
      .catch(err => {
        next(err);
      });
  });
};
