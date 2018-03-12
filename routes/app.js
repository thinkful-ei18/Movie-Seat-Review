'use strict';
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const TheatreReview = require('../models/theatreReview');

app.get('/', (req, res) => {
  //TheatreReview.find().then(trs => res.json(trs.map(tr => tr.serialize())));
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`Listening on port ${process.env.PORT || 8080}`);
});
