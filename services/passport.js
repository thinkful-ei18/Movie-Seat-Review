'use strict';
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('../config/keys');
const mongoose = require('../models/user');

const User = mongoose.model('users');

//to seralize a cookie for the user
passport.serializeUser((user, done) => {
  done(null, user.id); //user.id from mongodb database assigned by mongo
});
//deserialize the cookie
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

//passport will use google to authenticate users
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(user => {
        if (user) {
          done(null, user); //done everything is good user is coming back
        } else {
          User.create({ googleId: profile.id }).then(user => done(null, user));
        }
      });
    }
  )
);
