'use strict';

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Review = require('../models/reviews');
const user = require('../models/reviews');

router.get('/reviews, (req, res, next) => {
  const user = req.user;
  Review.find()
    .then(items => {
      res.json(items);
    })
    .catch(next);
});

module.exports = router;
