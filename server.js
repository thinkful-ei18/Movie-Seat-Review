'use strict';
const express = require('express');
const app = express();
require('./models/user');
require('./services/passport');

const authRoutes = require('./routes/authRoutes');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

const keys = require('./config/keys');

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());
authRoutes(app);

mongoose.connect(keys.mongoURI);

// app.use(passportConfig); //authentication strategy

app.get('/', (req, res) => {
  //TheatreReview.find().then(trs => res.json(trs.map(tr => tr.serialize())));
  res.send('Hello Mo is currently maintaing this site.');
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`Listening on port ${process.env.PORT || 8080}`);
});
