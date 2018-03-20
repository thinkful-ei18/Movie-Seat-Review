const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const passport = require('passport');

const User = require('../models/user');
const Review = require('../models/reviews');
module.exports = app => {
  app.post('/api/reviews', (req, res, next) => {
    console.log('Endpoint hit');
    console.log(req.user, 'from api post');
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

    console.log(newReview);

    Review.create(newReview)
      .then(result => {
        res
          .location(`${req.originalUrl}/${result.id}`)
          .status(201)
          .json(result);
      })
      .catch(err => {
        console.log('I just got here');
        next(err);
      });
  });
};
