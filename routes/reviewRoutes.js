const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../models/user');
const Review = require('../models/reviews');
module.exports = app => {
  //review post request
  app.post('/api/reviews', (req, res, next) => {
    console.log('Endpoint hit');
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
    next();
  });

  //get all reviews
  app.get('/api/reviews', (req, res, next) => {
    Review.find()
      .then(results => {
        res.json(results.map(result => result.serialize()));
      })
      .catch(next);
  });
};
