const express = require('express');
const router = express.Router();
const passport = require('passport');
const activitiesCtrl = require('../controllers/activities')

//?activities routes
/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/today');
});

/* GET users listing. */
router.get('/today', activitiesCtrl.index)



//? oauth blocks
router.get('/auth/google', passport.authenticate(
  'google',
  {
    // Requesting the user's profile and email
    scope: ['profile', 'email'],
    // optional, force pick account every time
    prompt: 'select_account'
  }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/',
    failureRedirect: '/'
  }
));

router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/');
  });
});

module.exports = router;
