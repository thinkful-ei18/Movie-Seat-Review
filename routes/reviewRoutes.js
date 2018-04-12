const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../models/user');
const Review = require('../models/reviews');
module.exports = app => {
  //review post request
  app.post('/api/reviews/post', (req, res, next) => {
    console.log('Endpoint hit');
    const { productName, rating, summary, image } = req.body;

    const newReview = {
      productName,
      rating,
      image,
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
        res.status(500).json(err);
      });
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
